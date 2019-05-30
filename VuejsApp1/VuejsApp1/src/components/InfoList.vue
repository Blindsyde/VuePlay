<template>
    <div>
        <h4 v-if="loading">Loading...</h4>
        <info-item v-for="info in allinfo"
                   :key="info.userid"
                   :info="info">
        </info-item>
    </div>
</template>

<script>
    import { ALL_INFO_QUERY } from '../constants/graphql'
    import InfoItem from './InfoItem'
  export default {
    name: 'InfoList',
    data () {
      return {
        allinfo: [],
        loading: 0
      }
    },
    components: {
      InfoItem
    },
    apollo: {
      allinfo: {
        query: ALL_INFO_QUERY
      }
    }
  }
</script>