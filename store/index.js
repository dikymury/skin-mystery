export const state = () => ({
  profilePreview: false,
  isBlock: false,
  sizeWindow: 1300,
});

export const mutations = {
  SET_PROFILE_PREVIEW(state, data) {
    state.profilePreview = data;
  },
  SET_ISBLOCK(state, data) {
    state.isBlock = data;
  },
  SET_SIZEWINDOW(state, data) {
    state.sizeWindow = data;
  },
};

export const actions = {};

export const getters = {};
