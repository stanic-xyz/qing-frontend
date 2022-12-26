<template>
  <header id="nav">
    <template v-for="item in navList">
      <nav-item :key="item.name" v-bind:nav-data="item">
        {{ item.name }}
        <nav-item />
      </nav-item>
    </template>
    <form
      id="top_search_from"
      action="@{/search}"
      class="search_form"
      method="get"
      onsubmit="return on_top_search_form();"
    >
      <label for="top_search_input"></label>
      <input
        id="top_search_input"
        autocapitalize="on"
        autocomplete="on"
        class="search_input"
        name="keyword"
        placeholder="输入关键字"
        spellcheck="false"
        value=""
      />
      <input class="search_submit" type="submit" value="" />
      <input name="page" type="hidden" value="1" />
    </form>
  </header>
</template>
<script lang="ts">
import NavItem from "../../components/block/Nav-Item";

export default {
  name: "MyNav",
  components: { NavItem },
  props: ["title"],
  data() {
    return {
      activeIndex: "1",
      navList: [
        { groupName: "首页", route: "/", groupIcon: "", groupActive: true },
        {
          groupName: "目录",
          route: "/catalog",
          groupIcon: "",
          groupActive: false,
        },
        {
          groupName: "每日推荐",
          route: "/recommend",
          groupIcon: "",
          groupActive: false,
        },
        {
          groupName: "最近更新",
          route: "/update",
          groupIcon: "",
          groupActive: false,
        },
        {
          groupName: "排行榜",
          route: "/rank",
          groupIcon: "",
          groupActive: false,
        },
        {
          groupName: "详情",
          route: "/detail",
          groupIcon: "",
          groupActive: false,
        },
        {
          groupName: "搜索",
          route: "/search",
          groupIcon: "",
          groupActive: false,
        },
      ],
    };
  },
  methods: {
    create: function () {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style></style>
