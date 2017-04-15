import delay from './delay';

const towns = [
    {
        "id": "2",
        "name": "基隆",
        "towns": [
            {
                "id": "13",
                "name": "仁愛區",
                "postal": "200"
            },
            {
                "id": "14",
                "name": "信義區",
                "postal": "201"
            },
            {
                "id": "15",
                "name": "中正區",
                "postal": "202"
            },
            {
                "id": "16",
                "name": "中山區",
                "postal": "203"
            },
            {
                "id": "17",
                "name": "安樂區",
                "postal": "204"
            },
            {
                "id": "18",
                "name": "暖暖區",
                "postal": "205"
            },
            {
                "id": "19",
                "name": "七堵區",
                "postal": "206"
            }
        ]
    },
    {
        "id": "4",
        "name": "連江",
        "towns": [
            {
                "id": "22",
                "name": "南竿鄉",
                "postal": "209"
            },
            {
                "id": "23",
                "name": "北竿鄉",
                "postal": "210"
            },
            {
                "id": "24",
                "name": "莒光鄉",
                "postal": "211"
            },
            {
                "id": "25",
                "name": "東引鄉",
                "postal": "212"
            }
        ]
    },
    {
        "id": "21",
        "name": "台東",
        "towns": [
            {
                "id": "340",
                "name": "台東市",
                "postal": "950"
            },
            {
                "id": "341",
                "name": "綠島鄉",
                "postal": "951"
            },
            {
                "id": "342",
                "name": "蘭嶼鄉",
                "postal": "952"
            },
            {
                "id": "343",
                "name": "延平鄉",
                "postal": "953"
            },
            {
                "id": "344",
                "name": "卑南鄉",
                "postal": "954"
            },
            {
                "id": "345",
                "name": "鹿野鄉",
                "postal": "955"
            },
            {
                "id": "346",
                "name": "關山鎮",
                "postal": "956"
            },
            {
                "id": "347",
                "name": "海端鄉",
                "postal": "957"
            },
            {
                "id": "348",
                "name": "池上鄉",
                "postal": "958"
            },
            {
                "id": "349",
                "name": "東河鄉",
                "postal": "959"
            },
            {
                "id": "350",
                "name": "成功鎮",
                "postal": "961"
            },
            {
                "id": "351",
                "name": "長濱鄉",
                "postal": "962"
            },
            {
                "id": "352",
                "name": "太麻里鄉",
                "postal": "963"
            },
            {
                "id": "353",
                "name": "金峰鄉",
                "postal": "964"
            },
            {
                "id": "354",
                "name": "大武鄉",
                "postal": "965"
            },
            {
                "id": "355",
                "name": "達仁鄉",
                "postal": "966"
            }
        ]
    },
    {
        "id": "22",
        "name": "花蓮",
        "towns": [
            {
                "id": "356",
                "name": "花蓮市",
                "postal": "970"
            },
            {
                "id": "357",
                "name": "新城鄉",
                "postal": "971"
            },
            {
                "id": "358",
                "name": "秀林鄉",
                "postal": "972"
            },
            {
                "id": "359",
                "name": "吉安鄉",
                "postal": "973"
            },
            {
                "id": "360",
                "name": "壽豐鄉",
                "postal": "974"
            },
            {
                "id": "361",
                "name": "鳳林鎮",
                "postal": "975"
            },
            {
                "id": "362",
                "name": "光復鄉",
                "postal": "976"
            },
            {
                "id": "363",
                "name": "豐濱鄉",
                "postal": "977"
            },
            {
                "id": "364",
                "name": "瑞穗鄉",
                "postal": "978"
            },
            {
                "id": "365",
                "name": "萬榮鄉",
                "postal": "979"
            },
            {
                "id": "366",
                "name": "玉里鎮",
                "postal": "981"
            },
            {
                "id": "367",
                "name": "卓溪鄉",
                "postal": "982"
            },
            {
                "id": "368",
                "name": "富里鄉",
                "postal": "983"
            }
        ]
    }
];


class AllTownsApi {
    static getAllTowns() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], towns));
            }, delay);
        });
    }

   
}

export default AllTownsApi;