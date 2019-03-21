const state = {
    name:"no name"
}

const mutations = {
    changeName(state,data){
        state.name = data.name
    }
}

const actions = {
    changeName({commit},data){
        commit('changeName',data)
    }
}

export default {
    namespaced:true,
    state,mutations,actions
}