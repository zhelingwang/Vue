const state = {
    test:"test"
}

const mutations = {
    changeTest(state,data){
        state.test = data.test
    }
}

const actions = {
    changeTest({commit},data){
        commit('changeTest',data)
    }
}

export default {
    namespaced:true,
    state,mutations,actions
}