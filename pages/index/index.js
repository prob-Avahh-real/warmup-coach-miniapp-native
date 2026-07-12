Page({
  data: {
    sports: [
      {id:"通用",emoji:"🏃",label:"通用"},
      {id:"跑步",emoji:"🏃‍♂️",label:"跑步"},
      {id:"篮球",emoji:"🏀",label:"篮球"},
      {id:"足球",emoji:"⚽",label:"足球"},
      {id:"游泳",emoji:"🏊",label:"游泳"},
      {id:"骑行",emoji:"🚴",label:"骑行"},
      {id:"力量训练",emoji:"🏋️",label:"力量训练"},
    ]
  },
  startWorkout(e) {
    const sportId = e.currentTarget.dataset.sport;
    wx.vibrateShort({ type: "light" });
    wx.navigateTo({
      url: `/pages/workout/workout?sport=${encodeURIComponent(sportId)}`
    });
  }
});
