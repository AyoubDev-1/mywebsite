// NAVIGATION FUNCTION
function showhidNav() {
    if (document.getElementById('nanigation').className != "show nanigation") {
        document.getElementById('nanigation').className = "show nanigation"
        document.getElementById('only-mobile').className = "fas fa-times"
    }
    else {
        document.getElementById('nanigation').className = "hide nanigation"
        document.getElementById('only-mobile').className = "fas fa-bars"

    }
}


// data player
function findperson() {
    const nameplayer = document.getElementById('name-player-card')
    const idplayer = document.getElementById('id-player-card')
    const implyer = document.getElementById('img-playeer')
    const cityplayer = document.getElementById('city-player-card')
    const infoplayer = document.getElementById('info-player-card')
    const inputper = document.getElementById('inputper').value;
    var inputt = inputper
    // LIST OF  PLAYERS
    var players = [
        {
            "id": "1",
            "name": "شينع دونغ هيوك",
            "city": "---",
            "imglink": "imges/personage/squid-game-per-001.png",
            "inifo": "لاعب مسن  و مريض   ",
        },
        {
            "id": "67",
            "name": "ساي بوك",
            "city": "كوريا الشمالية",
            "imglink": "imges/personage/squid-game-per-067.png",
            "inifo": "#",
        },
        {
            "id": "101",
            "name": "دكو سو",
            "city": "---",
            "imglink": "imges/personage/squid-game-per-101.png",
            "inifo": " رجل العصابات و لديه ديون ضخمة لدفعها  ",
        },
        {
            "id": "199",
            "name": "علي",
            "city": "---",
            "imglink": "imges/personage/squid-game-per-199.png",
            "inifo": "عامل اجنبي / باكستاني",
        },
        {
            "id": "212",
            "name": "غير معروف",
            "city": "----",
            "imglink": "imges/personage/squid-game-per-212.png",
            "inifo": "#",
        },
        {
            "id": "218",
            "name": " سانغ وو",
            "city": "----",
            "imglink": "imges/personage/squid-game-per-218.png",
            "inifo": "رئيس فريق الاستثمار في شركة أوراق مالية. كان صغيرًا في Ki-hoon ، وهو طالب موهوب في الحي دخل جامعة سيول الوطنية.",
        },
        {
            "id": "240",
            "name": "جي يونغ",
            "city": "----",
            "imglink": "imges/personage/squid-game-per-240.png",
            "inifo": "لاعبة انضمت إلى اللعبة بعد إطلاق سراحها من السجن لقتلها والدها الذي يسيء معاملتها.",
        },

        {
            "id": "465",
            "name": "كي هون",
            "city": "----",
            "imglink": "imges/personage/squid-game-per-465.png",
            "inifo": "يشارك في اللعبة بعد معاناته من فشل العمل والطلاق والديون والمقامرة",
        },
        {
            "id": "276",
            "name": "كريستيان لاجاحت",
            "city": "----",
            "imglink": "imges/personage/276.jpg",
            "inifo": "يشارك في اللعبة بعد معاناته من فشل العمل ",
        },

    ]
    var result = players.find(item => item.id == inputt);
    if (result) {
        nameplayer.innerHTML = result.name
        idplayer.innerHTML = result.id
        cityplayer.innerHTML = result.city
        infoplayer.innerHTML = result.inifo
        implyer.src = result.imglink
    }
    else {
        nameplayer.innerHTML = 'معطيات غير متوفرة';
        idplayer.innerHTML = inputt;
        cityplayer.innerHTML = 'معطيات غير متوفرة';
        infoplayer.innerHTML = 'معطيات غير متوفرة';
        implyer.src = 'imges/personage/no-found.png';
    }
}




function epsiods() {
    var eps = [
        {
            "id": "الحلقة الاولى",
            "link": "https://fmovies.to/film/squid-game.x1jzw/oojkxjy",

        },
        {
            "id": "الحلقة التانية",
            "link": "https://fmovies.to/film/squid-game.x1jzw/pjrlprx",
        },
        {
            "id": "الحلقة التالتة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/ykqxvq1",

        },
        {
            "id": "الحلقة الرابعة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/pjrlp9q",
        },
        {
            "id": "الحلقة الخامسة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/37r5p0y",
        },
        {
            "id": "الحلقة السادسة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/rjlnw6o",
        },
        {
            "id": "الحلقة السابعة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/z1lyxww",
        },
        {
            "id": " الحلقة التامنة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/6vl7w9z",
        },
        {
            "id": "الحلقة التاسعة",
            "link": "https://fmovies.to/film/squid-game.x1jzw/kkwz3z9",
        },
        {
            "id": " بداية الموسم الثاني قريبا",
            "link": "seasontwo.html",
        },

    ]
    for (i = 0; i < eps.length; i++) {
        this.document.getElementById('eps').innerHTML += "<button><a target='blank' href='" + eps[i].link + "'>" + eps[i].id + " </a></button>";
    }
}


function stars() {
    var stars = [
        {
            "name": "شين دونغ هيوك",
            "role": "الكاتب",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Shin_Dong-Hyuk.jpg/280px-Shin_Dong-Hyuk.jpg",
            "facebook": "#",
            "instagram": "#",
            "youtube": "#",
            "twitter": "#",

        },
        {
            "name": "هيونع جونغ",
            "role": "ممتلة",
            "img": "https://i.mdel.net/i/db/2017/9/757525/757525-500w.jpg",
            "facebook": "https://www.instagram.com/hoooooyeony/",
            "instagram": "https://www.instagram.com/hoooooyeony/",
            "youtube": "https://www.instagram.com/hoooooyeony/",
            "twitter": "https://www.instagram.com/hoooooyeony/",

        },
        {
            "name": " بارك ها سو ",
            "role": "ممتل",
            "img": "https://kdramastars1.files.wordpress.com/2018/12/44513-0000692584_002_20181130101035576.jpg",
            "facebook": "https://www.instagram.com/haesoopark_official/",
            "instagram": "https://www.instagram.com/haesoopark_official/",
            "youtube": "https://www.instagram.com/haesoopark_official/",
            "twitter": "https://www.instagram.com/haesoopark_official/",

        },
        {
            "name": "لي جونغ جا",
            "role": "ممتل",
            "img": "https://i.mydramalist.com/2zEwW_5_c.jpg",
            "facebook": "https://www.instagram.com/from_jjlee/",
            "instagram": "https://www.instagram.com/from_jjlee/",
            "youtube": "https://www.instagram.com/from_jjlee/",
            "twitter": "https://www.instagram.com/from_jjlee/",

        },
        {
            "name": "هيو سونغ تاي  ",
            "role": "ممتل",
            "img": "https://photos.hancinema.net/photos/photo1210115.jpg",
            "facebook": "https://www.instagram.com/heosungtae/",
            "instagram": "https://www.instagram.com/heosungtae/",
            "youtube": "https://www.instagram.com/heosungtae/",
            "twitter": "https://www.instagram.com/heosungtae/",

        },
        {
            "name": "لي يومي ",
            "role": "ممتلة",
            "img": "https://www.kmtstar.com/wp-content/uploads/2021/09/%D9%84%D9%8A-%D9%8A%D9%88-%D9%85%D9%8A-%D9%84%D8%B9%D8%A8%D8%A9-%D8%A7%D9%84%D8%AD%D8%A8%D8%A7%D8%B1-.jpg",
            "facebook": "https://www.instagram.com/leeyoum262/",
            "instagram": "https://www.instagram.com/leeyoum262/",
            "youtube": "https://www.instagram.com/leeyoum262/",
            "twitter": "https://www.instagram.com/leeyoum262/",

        },
        {
            "name": "اوهيونغ سو",
            "role": "ممتل",
            "img": "https://i.mydramalist.com/wn4rNf.jpg",
            "facebook": "https://www.instagram.com/ohyoung_soo/",
            "instagram": "https://www.instagram.com/ohyoung_soo/",
            "youtube": "https://www.instagram.com/ohyoung_soo/",
            "twitter": "https://www.instagram.com/ohyoung_soo/",

        },
        {
            "name": "وي هان جونغ",
            "role": "ممتل",
            "img": "https://i.mydramalist.com/xzdP0_5_c.jpg",
            "facebook": "https://www.instagram.com/wi__wi__wi/",
            "instagram": "https://www.instagram.com/wi__wi__wi/",
            "youtube": "https://www.instagram.com/wi__wi__wi/",
            "twitter": "https://www.instagram.com/wi__wi__wi/",

        },
        {
            "name": "جو ريونغ كيم",
            "role": "ممتلة",
            "img": "https://6.vikiplatform.com/image/897dbe2eeeb14158a53faeb4bafe8197.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
            "facebook": "https://www.instagram.com/kimjooryoung/",
            "instagram": "https://www.instagram.com/kimjooryoung/",
            "youtube": "https://www.instagram.com/kimjooryoung/",
            "twitter": "https://www.instagram.com/kimjooryoung/",

        },
        {
            "name": "جونغ يو",
            "role": "ممتل",
            "img": "https://6.viki.io/image/ebc3348fa69a4608a19dab8eac920967.png?x=b&s=843x474&q=h&cb=1",
            "facebook": "https://www.instagram.com/gongyoo7010/",
            "instagram": "https://www.instagram.com/gongyoo7010/",
            "youtube": "https://www.instagram.com/gongyoo7010/",
            "twitter": "https://www.instagram.com/gongyoo7010/",

        },

    ]
    for (i = 0; i < stars.length; i++) {
        this.document.getElementById('stars').innerHTML += "<div class='star-card'> <img src='" + stars[i].img + "' alt='' srcset=''>  <div class='star-info'> <p>" + stars[i].name + "</p> <small> " + stars[i].role + "</small>  <div class='star-social-media'>  <a href='" + stars[i].facebook + "'><i class='fab fa-facebook'></i></a> <a href='" + stars[i].instagram + "'><i class='fab fa-instagram'></i></a> <a href='" + stars[i].twitter + "'><i class='fab fa-twitter'></i></a> <a href='" + stars[i].youtube + "'><i class='fab fa-youtube'></i></a> </div> </div></div>";
    }
}

 
w3IncludeHTML();