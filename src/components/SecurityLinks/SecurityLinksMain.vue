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
        <el-input
          v-model="search_input"
          class="search-bar"
          size="default"
          placeholder="Search Articles"
          :prefix-icon="Search"
          @input="debouncedSearch"
        />
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
  import { markRaw } from 'vue';
  import { Search } from '@element-plus/icons-vue'

  import Links from './SecurityLinks.vue';

  import type { Link, LinkCategory } from '@/types/security_links';
  import linksData from '@/assets/links.json';
  import debounce from 'lodash/debounce';
  import uniqBy from 'lodash/uniqBy';

  @Component({
    name: 'security-links-main',
    components: {
      Links,
    },
  })
  class SecurityLinksMain extends Base {
    Search = markRaw(Search);
    link_categories = linksData as LinkCategory[];

    stored_link_category_name = this.link_categories[0].name;

    selected_link_category_name = this.link_categories[0].name;
    inner_width = window.innerWidth;

    search_input: string | null = null;
    search_category: LinkCategory = {
      name: 'Search',
      links: [],
      categories: []
    }

    get mobile_view() {
      return this.inner_width < 760;
    }

    get selected_link_category() {
      if (this.selected_link_category_name === 'search') {
        return this.search_category;
      }

      return this.link_categories.find(
        (category) => category.name === this.selected_link_category_name
      ) ?? null;
    }

    get all_articles(){
      const links: Link[] = this.link_categories.flatMap(category => category.links)
      this.link_categories.forEach(category => {
        links.push(...category.categories.flatMap(subcategory => subcategory.links))
      })
      return links
    }

    created() {
      window.addEventListener("resize", this.windowSizeChange);
    }

    destroyed() {
      window.removeEventListener("resize", this.windowSizeChange);
    }

    debouncedSearch = debounce(this.handleSearch, 500);
    handleSearch(): void{
      if (this.search_input && this.search_input.length > 0) {
        if(this.selected_link_category_name !== 'search'){
          this.stored_link_category_name = this.selected_link_category_name;
        }
        this.selected_link_category_name = 'search';

        const search_input = this.search_input.toLowerCase();
        const name_search = this.all_articles.filter(article => article.name.toLowerCase().includes(search_input) )
        const description_search = this.all_articles.filter(article => (article.description ? article.description : '').toLowerCase().includes(search_input) )

        this.search_category.links = uniqBy([ ...name_search, ...description_search ], 'url')

      } else{
        this.selected_link_category_name = this.stored_link_category_name;
      }
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
        .search-bar {
          width: 90%;
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

      .search-bar {
        margin: .5em 0;
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
