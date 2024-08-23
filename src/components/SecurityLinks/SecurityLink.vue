<template>
  <div class="link">
    <el-card
      shadow="always"
      class="link-card"
      @click="openLink(link.url)"
    >
      <el-image
        :src="getIcon(link.url)"
        alt="link icon"
        style="width: 25px; height: 25px"
        class="link-card-image"
        :lazy="true"
      />
      <span class="link-card-name">
        {{ link.name }}
      </span>
      <div class="link-card-description" v-if="link.description">
        {{ link.description }}
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { Component, Base, toNative, Prop } from 'vue-facing-decorator';

  import type { Link } from '@/types/security_links';

  @Component({
    name: 'security-link',
  })
  class SecurityLink extends Base {
    @Prop({
      required: true
    }) link!: Link;

    getIcon(url: string) {
      const base_url = 'https://s2.googleusercontent.com/s2/favicons?domain_url='
      return `${base_url}${url}`;
    }

    openLink(url: string) {
      window.open(url, '_blank');
    }

  }
  export default toNative(SecurityLink);

</script>
<style scoped lang="scss">
  .link-card {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .link-card-image {
    margin-right: 10px;
  }

  .link-card-name {
    font-size: 16px;
    font-weight: bold;
  }

  .link-card-description {
    font-size: 12px;
    color: #909399;
    padding-top: .5em;
  }

  @media screen and (max-width: 760px) {
    .link,
    .link-card {
      width: 95%;
      margin: 10px auto;
      padding: 0;
    }
  }
</style>
