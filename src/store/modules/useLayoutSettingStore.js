import {defineStore} from 'pinia'

export default defineStore('useLayoutSettingStore', {
    actions:{
        changeFold(){
            this.fold = !this.fold;
        },
        changeRefresh(){
            this.refresh = !this.refresh;
        }
    },

    state: ()=>{
        return {
            //是否折叠菜单栏，默认不折叠
            fold: false,
            refresh: false
        }
    }
})