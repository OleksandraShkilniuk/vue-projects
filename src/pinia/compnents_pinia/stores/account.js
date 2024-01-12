import {defineStore} from "pinia";

export const useAccountStore = defineStore('account', {

    state: ()=> ({
        account: {
            fullName: null,
            nickname: null,
            about: null,
        },
    }),

    getters: {

    },

    actions: {

    }

})