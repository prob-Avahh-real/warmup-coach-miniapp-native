// ===================== 数据 =====================
const BASE_PHASES = [
  {
    name:"升温 · Raise", duration:"~5分钟",
    exercises:[
      {cn:"开合跳",en:"Jumping Jacks",duration:45,unit:"秒",muscles:"全身",cues:"手臂上举过头，双脚同时跳跃分开"},
      {cn:"高抬腿",en:"High Knees",duration:30,unit:"秒",muscles:"髋屈肌，核心",cues:"膝盖抬高至髋以上，核心收紧"},
      {cn:"后踢腿",en:"Butt Kicks",duration:30,unit:"秒",muscles:"腘绳肌，股四头",cues:"脚跟尽量踢到臀部，上体保持直立"},
      {cn:"侧向滑步",en:"Lateral Shuffles",duration:30,unit:"秒",muscles:"臀中肌，内收肌",cues:"膝盖微屈，保持低重心，左右交替"},
      {cn:"原地小跑",en:"Jog in Place",duration:60,unit:"秒",muscles:"全身有氧",cues:"放松肩膀，自然摆臂，保持节奏"},
    ]
  },
  {
    name:"动态拉伸 · Activate+Mobilise", duration:"~10分钟",
    exercises:[
      {cn:"最伟大拉伸 🌟",en:"World's Greatest Stretch",reps:"5-8次/侧",muscles:"髋屈肌，腘绳肌，胸椎",cues:"弓步→肘触地→转体→后移伸直腿"},
      {cn:"尺蠖爬行",en:"Inchworm",reps:"6-8次",muscles:"腘绳肌，核心，肩部",cues:"双手走至平板→双脚小步走近手"},
      {cn:"蜘蛛侠弓步+转体",en:"Spiderman Lunge",reps:"5次/侧",muscles:"髋屈肌，胸椎",cues:"弓步脚踩到手外侧→手臂向上旋转打开"},
      {cn:"行进弓步",en:"Walking Lunges",reps:"10次/侧",muscles:"股四头，臀肌",cues:"前膝不超过脚尖，后膝接近地面"},
      {cn:"侧弓步",en:"Lateral Lunges",reps:"8次/侧",muscles:"内收肌，臀肌",cues:"向侧方迈大步，膝盖与脚尖同方向"},
      {cn:"抱膝走",en:"Walking Knee Hugs",reps:"10次/侧",muscles:"臀肌，下背",cues:"双手抱膝向胸拉近，支撑腿直立"},
      {cn:"直腿前踢",en:"Frankenstein Walks",reps:"10次/侧",muscles:"腘绳肌",cues:"腿伸直前踢，对侧手指碰脚尖"},
      {cn:"股四头拉伸走",en:"Walking Quad Stretch",reps:"10次/侧",muscles:"股四头肌",cues:"同侧手抓脚踝向后拉，膝盖并拢"},
      {cn:"摆腿前后",en:"Leg Swings Fwd",reps:"15次/侧",muscles:"腘绳肌，髋屈肌",cues:"扶墙，腿伸直前后摆动，逐渐增大幅度"},
      {cn:"摆腿侧向",en:"Leg Swings Side",reps:"15次/侧",muscles:"内收肌，外展肌",cues:"扶墙，腿伸直左右摆动，上身稳定"},
      {cn:"手臂绕圈",en:"Arm Circles",reps:"正反各15次",muscles:"肩袖，三角肌",cues:"手臂伸直，从小到大画圈"},
      {cn:"躯干转体",en:"Torso Twists",reps:"20次",muscles:"胸椎，腹斜肌",cues:"双脚与肩同宽，从腰部旋转"},
      {cn:"髋关节绕圈",en:"Hip Circles",reps:"正反各10次",muscles:"髋关节",cues:"双手叉腰，用髋画大圈"},
      {cn:"踝关节转动",en:"Ankle Rotations",reps:"正反各10次",muscles:"踝关节",cues:"脚尖点地，转动脚踝画圈"},
      {cn:"肩部开合",en:"Arm Swings",reps:"15次",muscles:"胸肌，肩部",cues:"双臂在胸前开合，感受胸部拉伸"},
    ]
  },
  {
    name:"神经激活 · Potentiate", duration:"~2-3分钟",
    exercises:[
      {cn:"快速踏步",en:"Fast Feet",duration:10,unit:"秒",muscles:"全身神经激活",cues:"最快速度原地踏步，手臂配合快节奏"},
      {cn:"快速踏步",en:"Fast Feet",duration:10,unit:"秒",muscles:"全身神经激活",cues:"第二组，保持速度！"},
      {cn:"快速踏步",en:"Fast Feet",duration:10,unit:"秒",muscles:"全身神经激活",cues:"最后一组，全力以赴！"},
      {cn:"垂直跳",en:"Squat Jumps",reps:"5-8次",muscles:"下肢爆发力",cues:"深蹲后爆发跳起，落地缓冲"},
      {cn:"弓步跳",en:"Split Jumps",reps:"5次/侧",muscles:"冲刺肌群",cues:"弓步姿势，跳起空中换腿"},
      {cn:"加速跑",en:"Strides",reps:"20m×3",muscles:"全身冲刺激活",cues:"逐渐加速至80%最大速度"},
    ]
  }
];

function adaptPhases(sport) {
  const p = JSON.parse(JSON.stringify(BASE_PHASES));
  if (sport === "跑步") {
    p[2].exercises.splice(3,0,
      {cn:"快速踏步",en:"Fast Feet",duration:10,unit:"秒",muscles:"全身激活",cues:"额外组！保持高频率"},
      {cn:"快速踏步",en:"Fast Feet",duration:10,unit:"秒",muscles:"全身激活",cues:"再加一组！"},
    );
  } else if (sport === "篮球") {
    p[2].exercises.splice(3,0,
      {cn:"垂直跳",en:"Squat Jumps",reps:"8-10次",muscles:"下肢爆发力",cues:"全力跳起，模拟抢篮板"},
      {cn:"垂直跳",en:"Squat Jumps",reps:"8-10次",muscles:"下肢爆发力",cues:"再来一组！"},
    );
  } else if (sport === "游泳") {
    p[1].exercises.push(
      {cn:"手臂绕圈(大)",en:"Arm Circles Large",reps:"正反各20次",muscles:"肩袖",cues:"肩关节大范围活动"},
      {cn:"躯干转体(加强)",en:"Torso Twists Plus",reps:"30次",muscles:"胸椎",cues:"增加旋转幅度"},
    );
    p[2].exercises = [
      {cn:"手臂绕圈",en:"Arm Circles",reps:"正反各20次",muscles:"肩袖",cues:"快速手臂绕圈"},
      {cn:"肩部开合",en:"Arm Swings",reps:"20次",muscles:"胸肌",cues:"激活划水肌群"},
      {cn:"垂直跳",en:"Squat Jumps",reps:"5次",muscles:"下肢爆发力",cues:"出发台激活"},
    ];
  } else if (sport === "力量训练") {
    p[2].exercises = [
      {cn:"快速踏步",en:"Fast Feet",duration:15,unit:"秒",muscles:"全身激活",cues:"轻量激活"},
      {cn:"垂直跳",en:"Squat Jumps",reps:"3-5次",muscles:"下肢",cues:"少量爆发激活"},
    ];
  }
  return p;
}

// ===================== 页面逻辑 =====================
Page({
  data: {
    phases: [],
    currentPhaseIdx: 0, currentExIdx: 0,
    currentPhase: {}, currentEx: {},
    timerDisplay: "00", progressDeg: 0,
    hasDuration: false, isPaused: false, isLast: false,
    exCardAni: "", showVoiceNote: false,
  },

  timerInterval: null, timerSeconds: 0, timerTotal: 0,
  startTime: 0,

  onLoad(opts) {
    const sport = decodeURIComponent(opts.sport || "通用");
    wx.setNavigationBarTitle({ title: `${sport} · 热身` });
    wx.setKeepScreenOn({ keepScreenOn: true });

    this.setData({
      phases: adaptPhases(sport),
      currentPhaseIdx: 0, currentExIdx: 0,
      showVoiceNote: true
    });
    // 3秒后隐藏提示
    setTimeout(() => this.setData({ showVoiceNote: false }), 5000);

    this.startTime = Date.now();
    this.renderExercise();
  },

  onUnload() {
    this.stopTimer();
    wx.setKeepScreenOn({ keepScreenOn: false });
    wx.vibrateShort({ type: "light" });
  },

  onHide() { this.stopTimer(); },
  onShow() {
    // 回来时重新渲染
    if (this.data.phases.length > 0) this.renderExercise();
  },

  // ---- 渲染 ----
  renderExercise() {
    const phase = this.data.phases[this.data.currentPhaseIdx];
    const ex = phase.exercises[this.data.currentExIdx];
    const hasDuration = !!ex.duration;
    const isLast = this.data.currentPhaseIdx === this.data.phases.length-1
                && this.data.currentExIdx === phase.exercises.length-1;

    this.stopTimer();

    const update = {
      currentPhase: phase,
      currentEx: ex,
      hasDuration,
      isLast,
      currentPhaseIdx: this.data.currentPhaseIdx,
      currentExIdx: this.data.currentExIdx,
      exCardAni: ""
    };

    if (hasDuration) {
      this.timerTotal = ex.duration;
      this.timerSeconds = ex.duration;
      update.timerDisplay = String(ex.duration);
      update.progressDeg = 0;
      update.isPaused = false;
      this.startTimer();
    } else {
      this.timerTotal = 0;
      this.timerSeconds = 0;
      update.timerDisplay = "";
      update.progressDeg = 0;
      update.isPaused = false;
    }

    this.setData(update);

    // 卡片动画
    setTimeout(() => this.setData({ exCardAni: "fade-in" }), 50);

    // 震动 + toast
    wx.vibrateShort({ type: "light" });
    wx.showToast({ title: ex.cn.replace(/[🌟🔥⚡💪]/g,""), icon: "none", duration: 1500 });
  },

  // ---- 计时器 ----
  startTimer() {
    this.stopTimer();
    if (this.timerTotal <= 0) return;
    this.timerInterval = setInterval(() => {
      if (this.data.isPaused) return;
      this.timerSeconds--;
      if (this.timerSeconds < 0) this.timerSeconds = 0;
      const pct = this.timerSeconds / this.timerTotal;
      this.setData({
        timerDisplay: String(this.timerSeconds),
        progressDeg: Math.round((1 - pct) * 360)
      });
      // 最后3秒震动
      if (this.timerSeconds > 0 && this.timerSeconds <= 3) {
        wx.vibrateShort({ type: "light" });
      }
      if (this.timerSeconds <= 0) {
        this.stopTimer();
        wx.vibrateShort({ type: "medium" });
        setTimeout(() => this.nextExercise(), 800);
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
  },

  // ---- 导航 ----
  nextExercise() {
    this.stopTimer();
    const phase = this.data.phases[this.data.currentPhaseIdx];
    if (this.data.currentExIdx < phase.exercises.length - 1) {
      this.setData({ currentExIdx: this.data.currentExIdx + 1 });
    } else if (this.data.currentPhaseIdx < this.data.phases.length - 1) {
      wx.vibrateShort({ type: "heavy" });
      this.setData({
        currentPhaseIdx: this.data.currentPhaseIdx + 1,
        currentExIdx: 0
      });
    } else {
      // 完成
      this.stopTimer();
      wx.setKeepScreenOn({ keepScreenOn: false });
      const elapsed = Math.round((Date.now() - this.startTime) / 1000);
      const min = Math.floor(elapsed / 60);
      const sec = elapsed % 60;
      wx.vibrateShort({ type: "heavy" });
      wx.showModal({
        title: "🎉 热身完成！",
        content: `总用时 ${min}:${String(sec).padStart(2,"0")}\n\n身体已经唤醒，去享受训练吧！`,
        showCancel: false,
        confirmText: "好的",
        success: () => wx.navigateBack()
      });
      return;
    }
    this.renderExercise();
  },

  prevExercise() {
    this.stopTimer();
    if (this.data.currentExIdx > 0) {
      this.setData({ currentExIdx: this.data.currentExIdx - 1 });
    } else if (this.data.currentPhaseIdx > 0) {
      const prevPhase = this.data.phases[this.data.currentPhaseIdx - 1];
      this.setData({
        currentPhaseIdx: this.data.currentPhaseIdx - 1,
        currentExIdx: prevPhase.exercises.length - 1
      });
    }
    this.renderExercise();
  },

  skipExercise() { this.nextExercise(); },

  togglePause() {
    const paused = !this.data.isPaused;
    this.setData({ isPaused: paused });
    wx.vibrateShort(paused ? { type: "light" } : { type: "light" });
  }
});
