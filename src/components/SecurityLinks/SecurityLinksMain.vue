<template>
  <div class="main-page">
    <div class="left-pane">
      <div class="header">
        <img
          class="cybermissions-logo"
          src="@/assets/images/cybermissions_full_removebg.png"
          alt="Cybermissions Logo"
          @click="openLink('https://cybermissions.org')"
        />
        <div class="social-links">
          <a @click=" openLink('https://cybermissions.org/Pages/contact.html') ">
            <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" alt="contact us">
          </a>
          <a @click=" openLink('https://twitter.com/cybermissions')">
            <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="twitter">
          </a>
          <a @click=" openLink('https://www.linkedin.com/company/71645798/')">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn">
          </a>
          <a @click=" openLink('https://www.facebook.com/cybermissions.online/')">
            <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook">
          </a>
        </div>
        <h2>Information Security Links</h2>
      </div>

      <el-select
        v-if="mobile_view"
        v-model="selected_link_category_name"
        @select="selected_link_category_name = $event"
      >
        <el-option
          v-for="category in link_categories"
          :key="category.name"
          :label="category.name"
          :value="category.name"
        />
      </el-select>

      <div class="security-links" v-else>
        <div class="main-categories">
          <el-menu
            v-model="selected_link_category_name"
            :default-active="selected_link_category_name"
            mode="vertical"
            @select="selected_link_category_name = $event"
          >
            <el-menu-item
              v-for="category in link_categories"
              :key="category.name"
              :index="category.name"
            >
              {{ category.name }}
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <div
      class="links-pane"
      v-if="selected_link_category"
    >
      <Links
        :category="selected_link_category"
      />
    </div>

  </div>
</template>
<script lang="ts">
  import { Component, Base, toNative } from 'vue-facing-decorator';

  import Links from './SecurityLinks.vue';

  import type { LinkCategory } from '@/types/security_links';
  import linksData from '@/assets/links.json';

  @Component({
    name: 'security-links-main',
    components: {
      Links,
    },
  })
  class SecurityLinksMain extends Base {
    link_categories = linksData as LinkCategory[];

    selected_link_category_name = this.link_categories[0].name;
    inner_width = window.innerWidth;

    get mobile_view() {
      return this.inner_width < 760;
    }

    get selected_link_category() {
      return this.link_categories.find(
        (category) => category.name === this.selected_link_category_name
      ) ?? null;
    }

    created() {
      window.addEventListener("resize", this.windowSizeChange);
    }

    destroyed() {
      window.removeEventListener("resize", this.windowSizeChange);
    }

    windowSizeChange() {
      this.inner_width = window.innerWidth;
    }

    openLink(url: string) {
      window.open(url, '_blank')
    }
  }
  export default toNative(SecurityLinksMain);

</script>
<style scoped lang="scss">
  .el-tabs_content {
    display: none;
  }

  .main-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    flex-direction: row;

    .links-pane {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      height: 100%;
      overflow-y: scroll;
    }

    .left-pane{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow: scroll;

      .header{
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: white;
        text-align: center;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .cybermissions-logo {
          cursor: pointer;
          margin: 1em;
          max-width: 150px;
          max-height: 80px;
          float: left;
          display: block;
        }
        .social-links{
          height: 1.5em;
          width: 100%;
          a {
            margin: 0 .5em;
            cursor: pointer;
          }
          a, img {
            height: 100%;
          }
        }
        h2{
          margin-top: .5em;
        }
      }

      .security-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        .main-categories {
          width: 100%;
          margin: 1em;
        }
      }
    }
  }
  @media screen and (max-height: 600px) {
    .main-page {
      .left-pane {
        .header{
          position: unset;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    .main-page {
      flex-direction: column;
      flex-wrap: nowrap;
      height: 100%;

      .left-pane {
        overflow: unset;
      }

      .links-pane,
      .left-pane {
        width: 90%;
        margin: 0 auto;
        height: fit-content;
        padding-bottom: 10px;
      }
    }
  }
</style>
