export const state = () =>({
    inPants: null,
    island: null
})

export const getters = {
    inPants: (state) => state.inPants,
    island: (state) => state.island
}

export const mutations = {
    setInPants(state, item){
        state.inPants = item
    },
    setIsland(state, island){
        state.island = island
    }
}

export const actions = {
    putInPants({commit}, item){
        console.log('Putting ' + item + ' in pants.')
        commit('setInPants', item)
    },
    setIsland({commit}, island){
        console.log('Setting island as ' + island)
        commit('setIsland', island)
    }
}