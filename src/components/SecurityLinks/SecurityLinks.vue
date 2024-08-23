<template>
  <h1 class="header">{{ category.name }}</h1>
  <div class="links-main">
    <div
      class="links-group links"
      v-if="category.links.length > 0"
    >
      <security-link
        v-for="link in category.links"
        :key="link.url"
        :link="link"
      />
    </div>
    <div
      v-for="sub_category in category.categories"
      class="links-group sub-category"
    >
      <h3>{{ sub_category.name }}</h3>
      <div class="links">
        <security-link
          v-for="link in sub_category.links"
          :key="link.url"
          :link="link"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Base, toNative, Prop } from 'vue-facing-decorator';
  import SecurityLink from './SecurityLink.vue';
  import type { LinkCategory } from '@/types/security_links';

  @Component({
    name: 'links',
    components: {
      SecurityLink,
    },
  })
  class Links extends Base {
    @Prop({
      required: true
    }) category!: LinkCategory;



  }
  export default toNative(Links);

</script>

<style lang="scss" scoped>
.header{
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  width: 100%;
  text-align: center;
  padding-top: 15px;
  margin-top: 0;
  color: var(--cyber-blue);
  border-bottom: 1px solid var(--cyber-blue);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.links-main{
  width: 95%;
  columns: 3 400px;
  .links-group{
    display: inline-block;
    width: 100%;
  }
  .sub-category {
    h3{
      text-align: center;
      color: var(--cyber-gold);
    }
  }
}

@media screen and (max-width: 760px) {
  .header{
    margin-top: unset;
    padding-top: unset;
  }
}

</style>
