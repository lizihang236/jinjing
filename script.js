// 获取DOM元素
const photo = document.getElementById('photo');
const audioPlayer = document.getElementById('audioPlayer');
const lyricsElement = document.getElementById('lyrics');
const playPauseButton = document.getElementById('playPauseButton');

// 歌词数据，包含时间戳和歌词
const lyricsData = [
    { time: 0.00, text: '美丽的神话(电影《神话》插曲) - 成龙&金喜善' },
    { time: 4.44, text: '词:王中言' },
    { time: 5.63, text: '曲:崔浚荣' },
    { time: 6.78, text: '编曲:捞仔' },
    { time: 17.13, text: '解开我' },
    { time: 20.29, text: '最神秘的等待' },
    { time: 23.88, text: '星星坠落 风在吹动' },
    { time: 31.31, text: '终于再将你拥入怀中' },
    { time: 38.85, text: '两颗心颤抖' },
    { time: 46.16, text: '相信我 不变的真心' },
    { time: 53.38, text: '千年等待有我承诺' },
    { time: 60.18, text: '无论经过多少的寒冬' },
    { time: 68.36, text: '我绝不放手' },
    { time: 75.81, text: '이제 나의 손을 잡고 눈을 감아요' },
    { time: 80.48, text: '우리 사랑했던 날들 생각해봐요' },
    { time: 89.91, text: '우리 너무 사랑해서 아팠었네요' },
    { time: 96.89, text: '서로 사랑한단 말도 못했었네요' },
    { time: 100.15, text: '每一夜 被心痛穿越' },
    { time: 108.65, text: '思念永没有终点' },
    { time: 114.86, text: '早习惯了孤独相随' },
    { time: 122.19, text: '我微笑面对' },
    { time: 129.52, text: '相信我 你选择等待' },
    { time: 136.81, text: '再多苦痛也不闪躲' },
    { time: 144.31, text: '只有你的温柔能解救' },
    { time: 151.6, text: '无边的冷漠' },
    { time: 158.42, text: '이제 나의 손을 잡고 눈을 감아요' },
    { time: 165.76, text: '우리 사랑했던 날들 생각해봐요' },
    { time: 173.03, text: '우리 너무 사랑해서 아팠었네요' },
    { time: 180.3, text: '서로 사랑한단 말도 못했었네요' },
    { time: 187.86, text: '让爱成为你我心中' },
    { time: 192.27, text: '那永远盛开的花' },
    { time: 195.03, text: '穿越时空绝不低头' },
    { time: 199.56, text: '永不放弃的梦' },
    { time: 202.45, text: '우리 너무 사랑해서 아팠었네요' },
    { time: 209.69, text: '서로 사랑한단 말도 못했었네요' },
    { time: 217.23, text: '让爱成为你我心中' },
    { time: 221.81, text: '那永远盛开的花' },
    { time: 224.54, text: '우리 소중했던 약속 잊지말아요' },
    { time: 232.14, text: '唯有真爱追随你我' },
    { time: 236.42, text: '穿越无尽时空' },
    { time: 239.27, text: '서로 사랑한단 말도 못했었네요' },
    { time: 249.85, text: '爱是心中唯一不变美丽的神话' }
];

// 当前歌词索引
let currentLyricIndex = 0;
let lyricInterval = null;  // 用来控制歌词更新的计时器

// 播放或暂停音频时控制图片旋转
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        photo.style.animation = 'rotate 5s infinite linear';
        startLyricTimer();  // 开始歌词计时
    } else {
        audioPlayer.pause();
        photo.style.animation = 'none';
        stopLyricTimer();  // 暂停歌词计时
    }
});

// 更新歌词
function updateLyrics() {
    const currentTime = audioPlayer.currentTime;
    if (currentLyricIndex < lyricsData.length && currentTime >= lyricsData[currentLyricIndex].time) {
        lyricsElement.textContent = lyricsData[currentLyricIndex].text;
        lyricsElement.style.opacity = 1;
        currentLyricIndex++;
    }
}

// 启动歌词更新计时器
function startLyricTimer() {
    lyricInterval = setInterval(updateLyrics, 1000);
}

// 停止歌词更新计时器
function stopLyricTimer() {
    clearInterval(lyricInterval);
}

// 粒子效果
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.getElementById('particles').appendChild(particle);
    setTimeout(() => particle.remove(), 3000); // 3秒后移除粒子
}

// 每隔一定时间创建粒子
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createParticle(x, y);
}, 100);

// 播放音频的函数，检查浏览器是否允许自动播放
function autoPlayMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("音乐自动播放成功");
            })
            .catch((error) => {
                console.log("自动播放失败, 需要用户交互");
            });
    }
}

// 页面加载时自动播放音乐
window.onload = () => {
    autoPlayMusic();  // 尝试自动播放音乐
};
