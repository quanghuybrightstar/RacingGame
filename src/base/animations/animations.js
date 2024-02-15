export const createAnimation = (_this) => {
  const frames = [
    { key: "imgCarFrame1" },
    { key: "imgCarFrame2" },
    { key: "imgCarFrame3" },
    { key: "imgCarFrame4" },
    { key: "imgCarFrame5" },
    { key: "imgCarFrame6" },
    { key: "imgCarFrame7" },
    { key: "imgCarFrame8" },
    { key: "imgCarFrame9" },
    { key: "imgCarFrame10" },
    { key: "imgCarFrame11" },
    { key: "imgCarFrame12" },
    { key: "imgCarFrame13" },
    { key: "imgCarFrame14" },
    { key: "imgCarFrame15" },
    { key: "imgCarFrame16" },
    { key: "imgCarFrame17" },
  ];

  _this.anims.create({
    key: "racing",
    frames: frames,
    // frameRepeat: 24,
    repeat: -1,
    duration: 300,
    // repeatDelay: 100,
    // ease: "Sine.easeInOut",
    yoyo: true,
  });
};
