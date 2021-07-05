<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>

            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Initial sort"
          label-for="initial-sort-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="initial-sort-select"
            v-model="sortDirection"
            :options="['asc', 'desc', 'last']"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      hover
      show-empty
      small
      @row-clicked="this.rowInfo"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        <div style="align-content: start;text-align: start">
          {{ row.value }}
        </div>
      </template>
      <template #cell(originalName)="row">
        <div style="align-content: start;text-align: start">
          {{ row.value }}
        </div>
      </template>

      <template #cell(coverUrl)="row">
        <b-avatar variant="info" v-bind:src="row.value"></b-avatar>
      </template>

      <template #cell(officialWebsite)="row">
        <div style="align-content: start;text-align: start">
          {{ row.value }}
        </div>
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          参数化信息
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} 详情
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <div style="align-items: start">
            <b-card v-bind:img-src="row.item.coverUrl" style="max-width: 20rem;"/>
            <ul>
              <li v-for=" (value, key) in row.item " :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </div>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
import request from '../../utils/request'

export default {
  name: 'AnimeInfo',
  data() {
    return {
      items: [{
        'id': 20190015,
        'name': '二十世纪电气目录',
        'instruction': '京都动画宣布启动轻小说《二十世纪电气目录》的动画化企划。该作原著曾获第八届京都动画大奖鼓励奖，由结成弘传创作。在8月10日，KA 文库将正式发售这部作品。 故事发生在明治四十年（1907 年）在京都伏见居住的百川稻子什么都不擅长，每天都被父亲责骂，对于她来说的救赎就是祈祷神佛，某天一如往常她前往伏见稻荷神社参拜神明，遇到了一位自由奔放的少年坂本喜八，坂本喜八对稻子说不要信这些看不见的东西，从今之后将是电气时代。而此时稻子的父亲对稻子说了关于结婚的事情，而且是父亲单方面决定的，稻子本来是放弃抵抗认为自己的价值就是如此，但坂本喜八打开了稻子想要离开这个家的心声，带着稻子离开了这个封闭的家。阻止结婚的方法是找出奇书《二十世纪电气目录》，那是喜八童年时代写下的关于电气的预言书，而喜八过去的哥哥清六带走这本书之后下落不明，喜八和稻子为了寻找这本奇书在京都和滋贺等地逃窜，消失的「电气目录」和其背后隐藏的秘密都等待解开。',
        'district': '日本',
        'coverUrl': 'https://anime-1255705827.cos.ap-guangzhou.myqcloud.com/H61229d2a12f746ea94159652a2686a5bF.jpg',
        'type': 'TV',
        'originalName': '二十世紀電氣目録',
        'otherName': '暂无',
        'author': '暂无',
        'company': '京都动画',
        'premiereDate': '暂无',
        'playStatus': '未播放',
        'plotType': '爱情 奇幻',
        'tags': '爱情 奇幻',
        'officialWebsite': 'http://www.kyotoanimation.co.jp/books/20thdenmoku/',
        'playHeat': '10000',
        'playList': [
          {
            'id': 1401561508882215000,
            'animeId': 20190015,
            'name': '播放列表1',
            'description': '播放列表1',
            'episodeList': [
              {
                'id': 1401561508911575000,
                'animeId': 20190015,
                'playlistId': 1401561508882215000,
                'name': 'CM',
                'status': 1,
                'uploaderName': 'admin',
                'uploaderId': null,
                'uploadTime': null,
                'url': 'https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/75b32a815285890809903778875/5cAXY7aMUEQA.mp4',
                'orderNo': 0,
                'animeEpisodeList': null
              }
            ]
          }
        ]
      }],
      fields: [
        {key: 'id', label: 'ID', sortable: false},
        {key: 'coverUrl', label: '图片', sortable: false},
        {key: 'name', label: '全名', sortable: true, sortDirection: 'desc'},
        {key: 'originalName', label: '原名', sortable: false},
        {key: 'author', label: '作者', sortable: true, sortDirection: 'desc'},
        {key: 'officialWebsite', label: '主页', sortable: false},
        {key: 'playStatus', label: '状态', sortable: false},
        {
          key: 'isActive',
          label: '状态',
          formatter: (value, key, item) => {
            return value ? '激活' : '冻结'
          },
          sortable: false,
          sortByFormatted: false,
          filterByFormatted: true
        },
        {key: 'actions', label: '操作'}
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: 'Show a lot'}],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  created() {
    request.get('/api/anime/listAnime').then(result => {
      let data = result.data.data
      this.items = result.data.data.records
      this.currentPage = data.current
      this.totalRows = data.total
    })
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return {text: f.label, value: f.key}
        })
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    rowInfo(item, index, button) {
      console.log(item, '详情')
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
