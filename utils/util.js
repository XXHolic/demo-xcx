const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const random = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}

/**
 * 使用 fromCharCode 方法
 * @param {*} type 
 * a-z 十进制对应 97-122
 * A-Z 十进制对应 65-90
 */
const randomLetter = (type='upper') => {
  let letter = 'A';
  if (type === 'upper') {
    letter = String.fromCharCode(random(65,90));
  } else {
    letter = String.fromCharCode(random(97,122));
  }

  return letter;
}

const getData = () => {
  const statusArr = ['热播','推荐','火爆','','冷门','','新番'];
  const imagLink = [
    '//i1.hdslb.com/bfs/archive/f3f45c3e4932118a7bb0d8276dc510d32b94150f.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/aa699d31b115bf0d8929d7d2c088c1bc2c2e65e1.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/d1aff8eaea82b23b4578f7d31fce036067ea2c4b.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/ad55906de6c0dd4b827a0a6bd13aa2c49e62b8a1.jpg@480w_270h_1c',
    '//i2.hdslb.com/bfs/archive/a1802834134494cf1d3c1efb41de333b7f59a53e.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/6152db89221a22804440fc62c5eff23a05a70bd3.jpg@480w_270h_1c',
    '//i1.hdslb.com/bfs/archive/5b647529327b05717d169c0771a99589372f6db3.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/25bea96b83c03a9fe9304dcc529b0579dac75742.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/b8bc17c80a0e0f663a52716c19254bcaa6d009e9.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/2dc7a463f8ed5ad079f8d97917faa0c6feb8e343.jpg@480w_270h_1c',
    '//i2.hdslb.com/bfs/archive/08cc899640f8c5bb6db496aabcbe8fb4026b3374.jpg@480w_270h_1c',
    '//i2.hdslb.com/bfs/archive/213c272ada7838b1c02828f5ef3a9e61cec373a6.jpg@480w_270h_1c',
    '//i2.hdslb.com/bfs/archive/3c86c149ee366b210d2531f45ea6e626e71edc3f.jpg@480w_270h_1c',
    '//i1.hdslb.com/bfs/archive/d90ace3b5f36e0642483f543507693424315e23b.png@480w_270h_1c',
    '//i2.hdslb.com/bfs/archive/4b53d02bf662a61854d9f1c5c172361fb8e1d6e1.jpg@480w_270h_1c',
    '//i1.hdslb.com/bfs/archive/0060a5c504deb57f4bab8209f50f5b014dd4d6a0.jpg@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/94e60b6803d93fc938a4a35b30538d664cb431cf.png@480w_270h_1c',
    '//i0.hdslb.com/bfs/archive/56b5b04e512992937564dfbc18d9091b784cc9dc.jpg@480w_270h_1c',
    '//i1.hdslb.com/bfs/archive/077e2ca4a307e0a28c33a69063979d477ebc4dec.jpg@480w_270h_1c',
    '//i1.hdslb.com/bfs/archive/8e0c61a39eaee03a518ccd71afb640015d3793f5.jpg@480w_270h_1c',
  ];
  const titleArr = ['鬼才知道','做了什么','意外发生','皮革厂','怎么了','奥给力','安利','没错','英雄联盟','里面一样有','年轻人','不慌','来啊','快活啊','白嫖你都不要，我也没法','算了','福利','白不要','看了','才明白','想不到','是这样的','意外总是有','猝不及防','这个真的想不到哦','你懂的','惊爆画面'];
  const nameArr = ['果冻','电竞','CC','碧天','空间','动画','老师','小','飞','渣','君','某','白','子','郎','老','兔','胖','包','大'];

  const data = [];

  const imgUsedIndex = [];
  const titleUsedIndex = [];
  const nameUsedIndex = [];

  for(let i=0;i<6;i++) {
    let imgIndex = random(0,19);
    while (imgUsedIndex.indexOf(imgIndex)>-1) {
      imgIndex = random(0,11);
    }
    imgUsedIndex.push(imgIndex);

    let titleIndex = random(0,27);
    while (titleUsedIndex.indexOf(titleIndex)>-1) {
      titleIndex = random(0,11);
    }
    titleUsedIndex.push(titleIndex);
    
    const preText = titleArr[titleIndex-1] || '';
    const nextText = titleArr[titleIndex+1] || '';
    const title = [preText,titleArr[titleIndex],nextText].join('，');
    
    let auIndex = random(0,19);
    while (nameUsedIndex.indexOf(auIndex)>-1) {
      auIndex = random(0,19);
    }
    nameUsedIndex.push(auIndex);
    const nextAuthText = nameArr[auIndex+1] || '';
    const author = [nameArr[auIndex],nextAuthText].join('');
    const statusIndex = random(0,6);
    const countNum = random(1,100);
    const count = countNum + '万';
    const obj = {
      id:Math.random(),
      imgSrc:imagLink[imgIndex] || '',
      title:title,
      status:statusArr[statusIndex],
      author:author || '',
      count: count
    };

    data.push(obj);

  }

  return {
    code:200,
    data:data
  }

}
const dealData = (data) => {
  const statusArr = ['热播','推荐','火爆','','冷门','','上新'];
  const formatData = [];
  const {dataType,...validData} = data;
  console.info({data});
  for(const ele of Object.values(validData)) {
    const {owner={},pic,title,stat,bvid} = ele;
    const {name=""} = owner;
    const {view} = stat;
    const statusIndex = random(0,6);
    const count = view;
    let href = `https://m.bilibili.com/video/${bvid}`;
    switch(dataType) {
      case "douga":
      case "dance":
        {
          href = `https://m.bilibili.com/video/${bvid}`
        }
        break;
    }


    const obj = {
      id:Math.random(),
      imgSrc: pic || '',
      title:title,
      status:statusArr[statusIndex],
      author:name || '',
      count: count,
      href:href
    };

    formatData.push(obj);

  }

  return formatData;

}

const randomDeviceId = (type) => {
  let deviceId = '';
  if (type === 'android') {
    const example = '862622048437469';
    const arr = Array.from({length:example.length})
    const formatArr = arr.map(ele => {
      return random(0,9)
    })
    deviceId = formatArr.join('');
  } else {
    const example = '5FA5B68A-7B2D-4364-99E3-E8B227D35248';
    const exampleSplit = example.split('-');
    const arr = exampleSplit.map(ele => {
      return Array.from({length:ele.length});
    })
    const formatNew = arr.map(ele => {
      const newData = ele.map(el => {
        const result = random(0,1)?random(0,9):randomLetter('upper');
        return result;
      });
      return newData.join('');
    })
    deviceId = formatNew.join('-');
  }

  return deviceId;
}

const formatReqParms = (data) => {
  const {platform='ios',model,system} = data;
  const appData = {
    iOS:'GSApp(iOS)',
    android:'GSAPP'
  };
  const appVersionData = ['5.5.23','5.5.22','5.5.21','5.5.20','5.5.19'];
  const os = platform.toLocaleLowerCase().indexOf('ios')?'iOS':'android';
  const app = appData[os];
  const osArr = system.split(' ');
  const osVersion = osArr[1];
  // const deviceType = model;
  const deviceType = 'iPhone10,1';
  const deviceId = randomDeviceId(platform);
  const appVersion = appVersionData[random(0,4)];

  let params = {
    app,
    deviceType,
    appVersion,
    os,
    osVersion,
    deviceId
  }

  // console.info(params)
  return params;
}

const reqListPre = 'https://xxholic.github.io/demo-images/data/ym/'
const coverPre = 'https://xxholic.github.io/demo-images/ym/cover/'
const reqListDataMap = {
  '0':`${reqListPre}list`,
  '1':`${reqListPre}jlist`,
  '2':`${reqListPre}hlist`,
  '3':`${reqListPre}xlist`,
}


module.exports = {
  formatTime,
  getData,
  dealData,
  formatReqParms,
  reqListDataMap,
  coverPre
}
