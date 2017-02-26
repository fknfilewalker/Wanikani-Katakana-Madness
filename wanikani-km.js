// ==UserScript==
// @name         WaniKani Katakana Madness
// @author       Luke-Filewalker
// @namespace    https://greasyfork.org/en/scripts/26481-wanikani-katakana-madness
// @include      https://www.wanikani.com/*
// @include      http://www.wanikani.com/*
// @version      1.0.2
// @description  Transforms everything related to on'yomi into katakana
// @run-at       document-end
// @grant        none
// @license      GPL v3.0
// ==/UserScript==

/*
* Kanji important reading (1: onyomi, 0: kunyomi)
* Saved localy, to update enter apiKey and use function on the bottom of the script
*/
var apiKey = "key";
var kanjiYomiPLEASANT = {"七":1,"二":1,"三":1,"山":1,"正":1,"女":1,"花":0,"公":1,"立":1,"玉":0,"切":1,"竹":0,"戸":0,"少":1,"肉":1,"森":0,"矢":0,"母":0,"皿":0,"皮":0,"四":0,"虫":0,"農":1,"手":0,"夏":0,"町":1,"糸":0,"大":1,"耳":0,"小":1,"不":1,"鳴":0,"西":1,"声":0,"目":0,"走":1,"亡":1,"金":1,"谷":0,"雨":0,"交":1,"林":0,"安":1,"車":1,"両":1,"集":1,"父":0,"回":1,"明":1,"店":1,"科":1,"南":1,"赤":0,"久":0,"必":1,"家":1,"対":1,"魚":1,"鳥":1,"船":1,"用":1,"行":1,"黄":0,"君":1,"一":1,"買":0,"馬":1,"負":1,"研":1,"楽":1,"歩":1,"話":1,"由":1,"所":1,"酒":1,"又":0,"重":1,"死":1,"村":0,"速":1,"夕":0,"羊":1,"広":0,"分":1,"主":1,"八":1,"電":1,"見":0,"高":1,"月":1,"里":0,"前":1,"気":1,"長":1,"物":0,"星":0,"新":1,"勝":1,"予":1,"答":0,"具":1,"送":1,"業":1,"次":1,"談":1,"美":1,"表":1,"未":1,"院":1,"飲":0,"顔":0,"習":1,"音":1,"聞":1,"写":1,"最":1,"転":1,"了":1,"欠":1,"出":1,"代":1,"鉄":1,"番":1,"売":0,"有":1,"仕":1,"姉":1,"六":1,"貝":0,"葉":0,"王":1,"天":1,"申":0,"界":1,"医":1,"発":1,"漢":1,"工":1,"市":1,"川":0,"力":1,"活":1,"後":1,"国":1,"丁":1,"黒":1,"色":0,"文":1,"号":1,"自":1,"間":1,"外":1,"引":0,"局":1,"円":1,"央":1,"上":1,"部":1,"京":1,"身":1,"口":1,"足":1,"横":0,"古":1,"今":1,"図":1,"台":1,"心":1,"生":1,"事":1,"刀":1,"五":1,"語":1,"元":1,"白":1,"受":0,"付":0,"早":1,"米":1,"来":1,"近":1,"弱":1,"辺":1,"食":1,"妹":1,"朝":0,"地":1,"頭":0,"算":1,"年":1,"毛":1,"者":1,"兄":0,"実":1,"歌":1,"組":1,"夜":1,"州":1,"下":1,"道":1,"田":0,"配":1,"起":0,"強":1,"内":1,"調":1,"当":1,"十":1,"点":1,"線":1,"相":1,"思":1,"木":1,"多":1,"屋":0,"形":1,"火":1,"以":1,"子":1,"草":0,"画":1,"要":1,"向":1,"先":1,"中":1,"病":1,"冬":0,"言":1,"首":0,"終":1,"本":1,"々":0,"化":1,"茶":1,"止":1,"日":1,"読":0,"風":1,"記":1,"光":1,"曲":1,"百":1,"羽":0,"落":1,"助":1,"血":1,"世":1,"去":1,"定":1,"乗":0,"人":1,"入":1,"休":1,"体":1,"会":1,"合":0,"紙":0,"住":1,"作":1,"牛":1,"千":1,"時":1,"使":1,"返":1,"全":1,"九":1,"丸":0,"男":1,"午":1,"平":1,"他":1,"半":1,"友":1,"反":1,"同":1,"右":0,"石":0,"左":0,"度":1,"客":1,"名":1,"県":1,"知":1,"和":1,"土":1,"池":0,"理":1,"犬":0,"太":1,"学":1,"字":1,"考":0,"室":1,"弟":1,"運":1,"投":0,"役":1,"軽":0,"持":0,"待":0,"決":1,"才":1,"進":1,"支":1,"数":1,"教":1,"万":1,"方":0,"服":1,"末":1,"東":1,"校":1,"北":1,"氏":1,"民":1,"泳":0,"水":1,"氷":0,"海":1,"何":0,"毎":1,"場":0,"打":0,"失":1,"礼":1,"札":1,"社":1,"絵":1,"空":1,"究":1,"直":1,"始":0,"角":1,"苦":1,"路":1,"親":1,"仮":1,"週":1,"通":1,"開":1,"雪":0,"雲":0,"青":1,"麦":0};
var kanjiYomiPAINFUL = {"加":1,"橋":0,"煙":1,"階":1,"笛":1,"寺":0,"神":1,"史":1,"飯":1,"短":1,"易":1,"成":1,"練":1,"希":1,"協":1,"季":1,"固":1,"周":1,"暗":1,"味":1,"謝":1,"初":1,"恋":1,"幻":1,"布":1,"面":1,"飛":1,"島":0,"映":1,"深":1,"温":1,"銀":1,"好":1,"尻":0,"能":1,"骨":1,"遠":0,"械":1,"築":1,"館":1,"囲":1,"保":1,"望":1,"拾":0,"仲":0,"虚":1,"努":1,"訓":1,"約":1,"波":1,"危":1,"鼻":0,"庭":1,"術":1,"課":1,"然":1,"機":1,"動":1,"参":1,"根":1,"商":1,"悲":0,"笑":0,"鏡":0,"秋":0,"岩":0,"帰":0,"塩":0,"問":1,"昼":0,"様":0,"想":1,"無":1,"果":1,"結":1,"勉":1,"労":1,"坂":0,"秒":1,"泣":0,"真":1,"急":1,"猫":0,"軍":1,"典":1,"連":1,"英":1,"喜":0,"辞":1,"信":1,"変":1,"仏":1,"非":1,"弁":1,"式":1,"是":1,"証":1,"寒":0,"的":1,"門":1,"汽":1,"養":1,"残":1,"雰":1,"妥":1,"法":1,"束":1,"毒":1,"浴":0,"晩":1,"険":1,"比":1,"喫":1,"順":1,"節":1,"皆":0,"閥":1,"像":1,"整":1,"舌":0,"胸":0,"洗":1,"宙":1,"折":1,"殺":1,"混":1,"暴":1,"団":1,"忙":0,"達":1,"種":1,"類":1,"忘":1,"得":1,"頑":1,"困":0,"災":1,"在":1,"嫌":1,"枚":1,"妻":1,"圧":1,"倒":1,"裕":1,"冊":1,"議":1,"穴":0,"守":1,"害":1,"疑":1,"冗":1,"警":1,"禅":1,"焼":0,"論":1,"罪":1,"難":1,"等":1,"愛":1,"競":1,"渉":1,"追":0,"品":1,"選":1,"個":1,"岸":1,"悪":1,"都":1,"流":1,"厚":0,"消":1,"令":1,"専":1,"単":1,"祈":1,"政":1,"干":1,"園":1,"細":0,"球":1,"器":1,"念":1,"松":0,"指":0,"曜":1,"功":1,"着":0,"働":1,"栄":1,"宇":1,"存":1,"別":1,"確":1,"絡":1,"歴":1,"薬":1,"乱":1,"書":1,"湯":0,"防":1,"完":1,"犯":1,"晴":0,"福":1,"利":1,"余":1,"臭":0,"良":0,"容":1,"兵":1,"尾":1,"察":1,"標":1,"争":1,"紀":1,"留":1,"昔":0,"伝":0,"祭":0,"浅":0,"芸":1,"告":1,"禁":1,"港":1,"願":1,"野":1,"宿":1,"戦":1,"試":1,"昆":1,"許":1,"春":0,"放":1,"夫":1,"歯":0,"題":1,"計":1,"位":1,"夢":1,"駅":1,"震":1,"説":1,"洋":1,"共":1,"箱":0,"登":1,"産":1,"減":1,"底":0,"低":1,"昨":1,"注":1,"区":1,"借":1,"側":0,"便":1,"倍":1,"率":1,"卒":1,"冒":1,"例":1,"列":1,"勇":1,"泉":1,"原":1,"級":1,"第":1,"弓":1,"取":0,"敗":1,"改":1,"句":1,"詞":1,"司":1,"可":1,"格":1,"命":1,"席":1,"善":1,"因":1,"士":1,"基":1,"堂":1,"賞":1,"常":1,"性":1,"府":1,"座":1,"老":1,"係":1,"履":1,"建":1,"経":1,"詩":1,"特":1,"徒":1,"億":1,"意":1,"息":1,"脳":1,"静":1,"情":1,"感":1,"僧":1,"丈":1,"私":1,"技":1,"旅":1,"報":1,"材":1,"財":1,"期":1,"植":1,"験":1,"求":1,"荷":0,"梅":0,"陽":1,"熱":1,"被":1,"料":1,"緑":0,"章":1,"童":1,"妨":1,"続":1,"識":1,"署":1,"暑":0,"族":1,"育":1,"治":1,"若":0,"員":1,"輪":1,"覚":1,"幸":1,"阪":1,"関":1,"官":1};
var kanjiYomiDEATH = {"浜":0,"潔":1,"衆":1,"販":1,"巨":1,"替":0,"応":1,"量":1,"婦":1,"逆":1,"資":1,"凍":1,"収":1,"違":0,"杯":1,"監":1,"河":1,"停":1,"盗":1,"途":1,"額":1,"接":1,"奇":1,"遊":0,"設":1,"準":1,"麗":1,"模":1,"評":1,"児":1,"退":1,"移":1,"任":1,"寄":1,"僚":1,"痛":1,"雄":1,"批":1,"詳":1,"懐":0,"革":1,"敵":1,"際":1,"欧":1,"象":1,"獣":1,"務":1,"総":1,"岡":0,"質":1,"稚":1,"含":1,"撃":1,"認":1,"置":1,"修":1,"案":1,"勢":1,"腰":0,"肩":0,"庁":1,"型":1,"益":1,"濃":1,"管":1,"差":1,"境":1,"程":1,"武":1,"述":1,"環":1,"憲":1,"裁":1,"展":1,"況":1,"影":1,"鬼":1,"割":0,"限":1,"胃":1,"景":1,"秀":1,"宅":1,"呼":0,"幹":1,"現":1,"沢":1,"針":0,"逮":1,"抜":0,"訟":1,"乾":1,"看":1,"鮮":1,"株":0,"属":1,"慣":1,"捜":1,"触":1,"解":1,"義":1,"審":1,"済":1,"援":1,"委":1,"過":1,"策":1,"藤":0,"観":1,"領":1,"韓":1,"優":1,"豊":1,"眠":1,"迷":1,"極":1,"症":1,"閣":1,"端":1,"再":1,"就":1,"障":1,"筆":1,"菓":1,"励":1,"締":1,"怖":1,"系":1,"烈":1,"猛":1,"肥":1,"適":1,"貧":1,"略":1,"越":1,"娘":0,"占":1,"婚":1,"江":0,"促":1,"催":1,"宴":1,"督":1,"詰":0,"臣":1,"旗":1,"押":0,"渇":0,"魅":1,"昇":1,"飾":1,"激":1,"枕":0,"貯":1,"創":1,"造":1,"故":1,"惑":1,"睡":1,"復":1,"独":1,"段":1,"添":1,"索":1,"緊":1,"幼":1,"健":1,"与":1,"隊":1,"討":1,"壊":1,"靴":0,"翌":1,"乏":1,"背":1,"汗":0,"攻":1,"並":1,"恐":1,"燃":1,"授":1,"豚":0,"郵":1,"寝":0,"担":1,"康":1,"満":1,"候":1,"購":1,"輩":1,"絶":1,"騒":1,"暇":1,"預":1,"導":1,"価":1,"処":1,"賀":1,"俳":1,"演":1,"副":1,"腕":0,"断":1,"渡":0,"積":1,"庫":1,"怒":1,"訴":1,"鉛":1,"贅":1,"票":1,"省":1,"条":1,"姿":1,"罰":1,"費":1,"備":1,"示":1,"派":1,"層":1,"冷":1,"響":1,"漏":1,"郎":1,"査":1,"印":1,"脱":1,"乳":1,"浮":0,"往":1,"件":1,"供":1,"更":1,"傘":0,"企":1,"刺":1,"制":1,"則":1,"判":1,"博":1,"吸":1,"崎":0,"師":1,"各":1,"城":0,"域":1,"綺":1,"宗":1,"符":1,"営":1,"宮":0,"居":1,"権":1,"届":0,"屈":1,"延":1,"誕":1,"板":1,"張":1,"怪":1,"律":1,"従":1,"微":1,"徴":1,"快":1,"税":1,"悩":0,"精":1,"清":1,"請":1,"態":1,"増":1,"我":1,"照":1,"招":1,"挙":1,"巻":1,"振":1,"補":1,"券":1,"提":1,"撮":1,"絞":1,"較":1,"効":1,"値":0,"検":1,"構":1,"捕":1,"妙":1,"状":1,"狭":0,"視":1,"祝":1,"誘":1,"責":1,"給":1,"隠":1,"突":1,"坊":1,"訪":1,"素":1,"統":1,"録":1,"職":1,"織":1,"施":1,"腹":1,"航":1,"掛":0,"街":1,"製":1,"載":1,"貸":0,"覧":1,"輸":1,"規":1,"診":1,"護":1,"版":1,"迫":1};
var kanjiYomiHELL = {"卵":0,"雇":1,"排":1,"仙":1,"奪":0,"換":1,"拒":1,"甘":0,"牙":1,"鋼":1,"舞":1,"充":1,"勧":1,"犠":1,"恵":1,"般":1,"尋":1,"依":1,"鹿":0,"薄":1,"雅":1,"岐":1,"頼":1,"償":1,"致":1,"御":1,"超":1,"甲":0,"射":1,"戻":0,"聴":1,"湾":1,"勤":1,"豪":1,"控":0,"探":1,"慮":1,"銃":1,"抗":1,"臨":1,"陣":1,"廃":1,"粉":1,"兆":1,"沿":1,"契":1,"拝":1,"漁":1,"複":1,"頻":1,"異":1,"秘":1,"奥":0,"刑":1,"汁":1,"献":1,"盤":1,"融":1,"既":1,"編":1,"粋":1,"華":1,"鑑":1,"除":1,"幾":0,"聖":1,"倉":1,"舎":1,"嘆":1,"磁":1,"驚":1,"帯":1,"散":1,"貨":1,"筋":1,"脈":1,"陸":1,"訳":1,"滞":1,"亀":0,"介":1,"炎":1,"徳":1,"偵":1,"序":1,"賛":1,"密":1,"圏":1,"込":0,"皇":1,"暖":1,"歓":1,"雑":1,"興":1,"欲":1,"染":1,"厄":1,"劇":1,"豆":1,"窓":0,"簡":1,"誌":1,"講":1,"互":1,"宝":1,"拡":1,"灰":0,"納":1,"忠":1,"杉":0,"爪":0,"盛":1,"肺":1,"志":1,"蔵":1,"諸":1,"却":1,"恩":1,"蒸":1,"賃":1,"掃":1,"巣":0,"液":1,"敬":1,"離":1,"糖":1,"似":1,"崩":1,"称":1,"賄":1,"免":1,"爆":1,"患":1,"醤":1,"弾":1,"貴":1,"油":1,"奴":1,"隷":1,"紅":1,"純":1,"芋":0,"承":1,"揮":1,"損":1,"恥":0,"択":1,"誤":1,"彫":1,"丼":1,"顧":1,"緩":0,"賂":1,"療":1,"薦":1,"富":1,"寿":1,"需":1,"津":0,"維":1,"縄":1,"伸":0,"幅":0,"跳":1,"沖":0,"摘":1,"核":1,"懸":1,"託":1,"妊":1,"娠":1,"旧":1,"盟":1,"閉":1,"跡":1,"掲":1,"傾":1,"還":1,"均":1,"謙":1,"縮":1,"泥":1,"邦":1,"救":1,"渋":1,"壁":0,"斐":1,"唱":1,"躍":1,"吹":0,"抑":1,"駆":0,"稲":0,"褒":1,"兼":1,"巡":1,"戒":1,"携":1,"透":1,"誉":1,"闘":1,"桜":0,"将":1,"枠":0,"隆":1,"汚":1,"噌":1,"採":1,"衛":1,"衝":1,"阜":1,"継":1,"葬":1,"傷":1,"剤":1,"駐":1,"茂":1,"諾":1,"尊":1,"為":1,"臓":1,"敷":0,"群":1,"縦":0,"腐":1,"熟":1,"源":1,"慎":1,"吐":0,"香":1,"遅":1,"裏":0,"否":1,"己":1,"獄":1,"厳":1,"執":1,"廊":1,"片":0,"宜":0,"狙":1,"祖":1,"鋭":1,"俊":1,"譲":1,"隣":1,"垂":1,"迎":1,"墓":1,"抵":1,"柱":1,"酢":0,"併":1,"測":1,"棒":1,"暮":1,"齢":1,"削":1,"幕":1,"募":1,"抱":0,"伴":1,"及":1,"扱":0,"旬":1,"飼":0,"普":1,"埋":0,"党":1,"奈":1,"奏":1,"姓":1,"孝":1,"孫":1,"宣":1,"埼":0,"遺":1,"遣":1,"径":1,"酔":1,"捨":0,"贈":1,"熊":0,"房":1,"払":0,"紹":1,"昭":1,"堀":0,"推":1,"枝":1,"伎":1,"棋":1,"机":0,"刻":1,"眼":1,"殖":1,"剣":1,"殿":1,"刊":1,"永":1,"銅":1,"銭":1,"敏":1,"砂":1,"鍋":0,"湖":1,"描":1,"避":1,"彼":0,"破":1,"祉":1,"債":1,"績":1,"緒":1,"著":1,"塁":1,"繁":1,"繰":0,"操":1,"漠":1,"菜":1,"装":1,"獲":1,"貿":1,"逃":1,"踏":1,"酸":1,"鈴":1,"降":1,"項":1};
var kanjiYomiPARADISE = {"謎":0,"鳩":0,"芽":0,"卓":1,"塗":1,"磨":0,"湿":1,"括":1,"涙":1,"孔":1,"翔":0,"裂":1,"擦":1,"帝":1,"樹":1,"嵐":0,"露":1,"即":1,"粘":1,"荒":0,"芯":1,"吉":1,"錬":1,"堅":0,"俺":0,"棟":1,"尼":1,"喪":1,"塊":0,"綱":0,"唇":0,"脅":1,"辱":1,"狩":0,"闇":0,"袋":0,"鐘":1,"澄":1,"菌":1,"縁":1,"盾":1,"簿":1,"嫁":0,"蛇":0,"墳":1,"巧":1,"滴":1,"滑":1,"壮":1,"欺":1,"蜜":1,"徹":1,"瀬":0,"措":1,"揚":1,"桃":0,"蛍":0,"至":1,"墟":1,"虎":0,"垣":0,"郷":1,"艦":1,"炭":1,"潜":1,"仁":1,"鉱":1,"陰":1,"衣":1,"偽":1,"侵":1,"棄":1,"髪":0,"梨":0,"拠":1,"遜":1,"漂":1,"到":1,"克":1,"稼":1,"床":1,"溝":1,"奮":1,"握":1,"掘":1,"弧":1,"滝":0,"墨":0,"丘":1,"暫":1,"珍":1,"泊":1,"析":1,"斗":1,"籍":1,"雷":1,"匹":0,"糾":1,"範":1,"焦":1,"潟":0,"貢":1,"狂":1,"賭":0,"竜":1,"威":1,"沈":1,"摩":1,"娯":1,"缶":1,"笠":0,"寸":1,"寮":1,"裸":1,"鈍":1,"姫":0,"塾":1,"眺":1,"呪":0,"叫":1,"刃":0,"翼":1,"忍":1,"棚":0,"粒":1,"釣":0,"曇":0,"井":1,"矛":1,"刷":1,"趣":1,"柔":1,"距":1,"旨":1,"岳":1,"懲":1,"疲":1,"脚":1,"炉":1,"滅":1,"穏":1,"魂":0,"泰":1,"柄":0,"肝":1,"芝":0,"紛":1,"軸":1,"挑":1,"頃":0,"琴":0,"斉":1,"慰":1,"筒":1,"潮":1,"叱":0,"霊":1,"碁":1,"吾":0,"陛":1,"幽":1,"零":1,"寧":1,"斬":1,"憶":1,"猿":0,"溶":1,"銘":1,"鍵":0,"耐":1,"輝":1,"俗":1,"巾":1,"瞬":1,"踊":0,"黙":1,"鍛":1,"賢":1,"駒":0,"綿":1,"菊":1,"爽":0,"佐":1,"庄":1,"誇":1,"瞭":1,"詐":1,"尺":1,"伊":1,"炊":1,"婆":1,"如":1,"墜":1,"帽":1,"扉":1,"憩":1,"扇":1,"崖":1,"搬":1,"掌":1,"挿":1,"桑":0,"揺":1,"咲":0,"悟":1,"抽":1,"拓":1,"襲":1,"脇":0,"把":1,"淀":0,"架":1,"遂":1,"盆":1,"虹":0,"粧":1,"剛":1,"鶴":0,"礎":1,"堤":1,"訂":1,"壇":1,"歳":1,"辛":1,"懇":1,"誠":1,"征":1,"劣":1,"堰":1,"彰":1,"邪":1,"淡":1,"畑":0,"煮":0,"穂":0,"勘":1,"奨":1,"鰐":0,"砕":1,"潤":1,"峰":1,"涼":1,"魔":1,"唐":1,"亭":1,"晶":1,"洞":1,"滋":1,"穫":1,"殴":1,"班":1,"涯":1,"后":1,"騎":1,"彩":1,"麻":1,"尽":1,"隙":0,"牧":1,"霜":0,"貼":0,"鉢":1,"妃":1,"謀":1,"浸":1,"唯":1,"刈":0,"翻":1,"駄":1,"諮":1,"軌":1,"漫":1,"蟹":0,"鬱":1,"陶":1,"拘":1,"斜":1,"迅":1,"蚊":0,"柳":1,"隔":1,"封":1,"朗":1,"畳":1,"嬢":1,"舟":0,"仰":1,"凶":1,"概":1,"侍":0,"硬":1,"培":1,"僕":1,"撲":1,"砲":1,"包":1,"泡":1,"双":1,"疫":1,"伺":0,"哲":1,"誓":1,"也":0,"幣":1,"覆":1,"椅":1,"廷":1,"帳":1,"沼":0,"酎":1,"憎":1,"瞳":1,"餓":1,"拳":1,"塀":1,"誰":0,"塔":1,"撤":1,"斎":1,"飢":1,"肌":0,"暦":1,"珠":1,"恨":1,"枢":1,"胴":1,"悔":1,"灯":1,"蓄":1,"畜":1,"癖":0,"朱":1,"箸":0,"租":1,"阻":1,"網":1,"紫":1,"蜂":0,"儀":1,"俵":1,"哀":1,"衰":1,"伯":1,"偶":1,"霧":0};
var kanjiYomiREALITY = {"湧":1,"聡":1,"之":0,"陥":1,"欄":1,"頂":1,"惰":1,"剰":1,"漸":0,"貫":1,"畔":1,"繊":1,"枯":1,"惨":1,"怠":1,"遭":1,"帥":1,"逸":1,"胡":1,"紋":1,"瓶":1,"累":1,"茎":0,"悦":1,"轄":1,"唄":0,"蝶":1,"醸":1,"腸":1,"羅":1,"喝":1,"陪":1,"釈":1,"譜":1,"肪":1,"禍":1,"廉":1,"崇":1,"疾":1,"侮":1,"寡":1,"弔":1,"憾":1,"遍":1,"茜":0,"渓":1,"稿":1,"喚":1,"隼":0,"亮":1,"萌":1,"煩":1,"壌":1,"漣":1,"醜":1,"塚":0,"舗":1,"唆":1,"冠":1,"芳":1,"升":0,"盲":1,"殉":1,"痢":1,"恒":1,"須":1,"謡":1,"戯":1,"衡":1,"髄":1,"寂":1,"劾":1,"覇":1,"且":0,"愚":1,"赴":1,"呂":1,"騰":1,"茨":0,"鎌":0,"慢":1,"祥":1,"乃":1,"栞":0,"擁":1,"婿":0,"賠":1,"孤":1,"拙":1,"綾":1,"緯":1,"曙":0,"鎖":1,"噴":1,"艇":1,"搭":1,"罷":1,"秩":1,"矯":1,"披":1,"某":1,"囚":1,"瑞":0,"膨":1,"偉":1,"召":1,"耕":1,"准":1,"藍":0,"濯":1,"鯨":1,"堕":1,"吟":1,"軟":1,"脂":1,"肯":1,"寛":1,"膚":1,"庶":1,"甚":1,"軒":1,"鼓":1,"糧":1,"烏":0,"藻":1,"妄":1,"鎮":1,"諭":1,"没":1,"傍":1,"蛮":1,"凸":1,"虐":1,"徐":1,"諒":1,"猟":1,"狐":0,"莉":1,"颯":1,"勲":1,"緋":1,"葵":0,"啓":1,"蒙":1,"佳":1,"荘":1,"輔":0,"酬":1,"卸":0,"悠":1,"尚":1,"顕":1,"呈":1,"粛":1,"該":1,"疎":1,"酷":1,"痴":1,"呆":1,"郭":1,"愉":1,"哺":1,"虜":1,"杏":0,"傲":1,"旦":1,"龍":1,"剖":1,"憂":1,"凹":1,"紡":1,"栃":0,"悼":1,"癒":1,"尿":1,"賓":1,"循":1,"凝":1,"弥":0,"昌":1,"脊":1,"遼":1,"瑛":1,"拍":1,"窮":1,"栓":1,"猶":1,"宰":1,"庸":1,"菅":0,"楓":1,"縫":1,"恭":0,"錯":1,"弦":1,"遥":0,"乙":1,"伐":1,"胎":1,"峡":1,"憤":1,"摂":1,"柴":0,"嘉":1,"紳":1,"智":1,"碑":1,"尉":1,"凛":1,"匠":1,"賊":1,"槽":1,"漬":0,"坪":0,"紺":1,"閲":1,"款":1,"敢":1,"酵":1,"哉":0,"蒼":1,"瑠":1,"硫":1,"赦":1,"窃":1,"忌":1,"肖":1,"奔":1,"朽":1,"濁":1,"享":1,"媒":1,"鶏":1,"迭":1,"絹":1,"嘱":1,"帆":1,"暁":0,"卑":1,"錠":1,"凌":0,"傑":1,"璃":1,"峠":0,"雌":0,"堪":0,"姻":1,"遷":1,"岬":0,"梓":0,"漆":1,"曹":1,"酪":1,"沙":1,"亜":1,"礁":1,"屯":1,"擬":1,"睦":1,"閑":1,"胆":1,"蔑":1,"慶":1,"汰":1,"逝":1,"匿":1,"鋳":1,"浄":1,"郡":1,"拷":1,"坑":1,"鯉":0,"随":1,"媛":0,"駿":1,"戴":1,"苗":1,"玄":1,"陳":1,"慈":1,"伏":1,"襟":0,"謹":1,"遮":1,"蓮":1,"凡":1,"丹":1,"邸":1,"搾":1,"慨":1,"惜":1,"偏":1,"倫":1,"洪":1,"倹":1,"俸":1,"慕":1,"胞":1,"飽":1,"縛":1,"沸":1,"叔":0,"叙":1,"淑":1,"穀":1,"旋":1,"呉":1,"奉":1,"牲":1,"弊":1,"窒":1,"椎":1,"隅":0,"那":1,"靖":0,"拐":1,"憧":0,"抹":1,"扶":1,"据":0,"朴":1,"郊":1,"殊":1,"殻":1,"詠":1,"阿":1,"泌":1,"践":1,"桟":1,"浪":1,"浦":0,"渦":1,"燥":1,"挟":0,"瓜":1,"粗":1,"膜":1,"舶":1,"藩":1,"貞":1,"栽":1,"遇":1,"錦":0,"酌":1,"陵":1,"隻":1,"篤":1};

/*
* Used for switching between hira and kata (vice versa)
*/
var hiraToKata = {"め": "メ", "む": "ム", "ゃ": "ャ", "も": "モ", "ゅ": "ュ", "や": "ヤ", "ょ": "ョ", "ゆ": "ユ", "ら": "ラ", "よ": "ヨ", "る": "ル", "り": "リ", "ろ": "ロ", "れ": "レ", "わ": "ワ", "ん": "ン", "を": "ヲ", "あ": "ア", "い": "イ", "う": "ウ", "え": "エ", "か": "カ", "お": "オ", "き": "キ", "が": "ガ", "く": "ク", "ぎ": "ギ", "け": "ケ", "ぐ": "グ", "こ": "コ", "げ": "ゲ", "さ": "サ", "ご": "ゴ", "し": "シ", "ざ": "ザ", "す": "ス", "じ": "ジ", "せ": "セ", "ず": "ズ", "そ": "ソ", "ぜ": "ゼ", "た": "タ", "ぞ": "ゾ", "ち": "チ", "だ": "ダ", "っ": "ッ", "ぢ": "ヂ", "づ": "ヅ", "つ": "ツ", "で": "デ", "て": "テ", "ど": "ド", "と": "ト", "に": "ニ", "な": "ナ", "ね": "ネ", "ぬ": "ヌ", "は": "ハ", "の": "ノ", "ぱ": "パ", "ば": "バ", "び": "ビ", "ひ": "ヒ", "ふ": "フ", "ぴ": "ピ", "ぷ": "プ", "ぶ": "ブ", "べ": "ベ", "へ": "ヘ", "ほ": "ホ", "ぺ": "ペ", "ぽ": "ポ", "ぼ": "ボ", "み": "ミ", "ま": "マ"};
var kataToHira = {"メ": "め", "ム": "む", "ャ": "ゃ", "モ": "も", "ュ": "ゅ", "ヤ": "や", "ョ": "ょ", "ユ": "ゆ", "ラ": "ら", "ヨ": "よ", "ル": "る", "リ": "り", "ロ": "ろ", "レ": "れ", "ワ": "わ", "ン": "ん", "ヲ": "を", "ア": "あ", "イ": "い", "ウ": "う", "エ": "え", "カ": "か", "オ": "お", "キ": "き", "ガ": "が", "ク": "く", "ギ": "ぎ", "ケ": "け", "グ": "ぐ", "コ": "こ", "ゲ": "げ", "サ": "さ", "ゴ": "ご", "シ": "し", "ザ": "ざ", "ス": "す", "ジ": "じ", "セ": "せ", "ズ": "ず", "ソ": "そ", "ゼ": "ぜ", "タ": "た", "ゾ": "ぞ", "チ": "ち", "ダ": "だ", "ッ": "っ", "ヂ": "ぢ", "ヅ": "づ", "ツ": "つ", "デ": "で", "テ": "て", "ド": "ど", "ト": "と", "ニ": "に", "ナ": "な", "ネ": "ね", "ヌ": "ぬ", "ハ": "は", "ノ": "の", "パ": "ぱ", "バ": "ば", "ビ": "び", "ヒ": "ひ", "フ": "ふ", "ピ": "ぴ", "プ": "ぷ", "ブ": "ぶ", "ベ": "べ", "ヘ": "へ", "ホ": "ほ", "ペ": "ぺ", "ポ": "ぽ", "ボ": "ぼ", "ミ": "み", "マ": "ま"};

if (/dashboard/.test(document.URL) || document.URL == "http://www.wanikani.com/" || document.URL == "https://www.wanikani.com/" || /\/lattice\/kanji/.test(document.URL)) // Homepage and lattice
{
    var replacePopup = function()
    {
        if ( isOnyomiAll($(this).text()) == 1) $(this).attr(('data-original-title'), convertToKata($(this).attr('data-original-title')) );
    };
    $('.lattice-single-character a[data-original-title]').each(replacePopup);

}
else if (/\/kanji\//.test(document.URL)) // Kanji detail page
{
    var replaceReading = function() {
        if ($(this).children('h3').text() == "On'yomi")
        {
            $(this).children('p').text(convertToKata($(this).children('p').text()));
        }
    };
    $('.span4').each(replaceReading);

    //--------- Visually Similar Kanji ---------//
    var replaceSimilar = function() {
        if (isOnyomiAll($(this).find('.character').text()) == 1) $(this).find('li').eq(0).text(convertToKata($(this).find('li').eq(0).text()));
    };
    $('.single-character-grid').find('a').each(replaceSimilar);
}
else if (/\/kanji\?difficult/.test(document.URL) || document.URL == "http://www.wanikani.com/kanji") // Big kanji page based on difficulty
{
    var n = document.URL.lastIndexOf('=');
    var difficulty = document.URL.substring(n + 1);

    var replaceLevelPortion = function() {
        $(this).find('.character-item').each(replaceReading);
    };

    var replaceReading = function() {
        if (isOnyomi($(this).find('.character').text(), difficulty)) $(this).find('li').eq(0).text(convertToKata($(this).find('li').eq(0).text()));
    };
    $('.single-character-grid').each(replaceLevelPortion);
}
else if (/\/radicals\//.test(document.URL) || /\/vocabulary\//.test(document.URL)) // Radical and Vocabulary page
{
    //--------- Found In and Utilized Kanji ---------//
    var replaceReading = function() {
        if (isOnyomiAll($(this).find('.character').text()) == 1) $(this).find('li').eq(0).text(convertToKata($(this).find('li').eq(0).text()));
    };
    $('.single-character-grid').find('a').each(replaceReading);
}
else if (/\/level\//.test(document.URL)) // Level page
{
    var n = document.URL.lastIndexOf('/');
    var level = document.URL.substring(n + 1);

    var replaceReading = function() {
        if (isOnyomi($(this).children('.character').text(), level))
        {
            $(this).find('li').eq(0).text(convertToKata($(this).find('li').eq(0).text()));
        }
    };
    $('.single-character-grid').eq(1).find('a').each(replaceReading);
}
else if (/review\/session/.test(document.URL)) // Review test page
{
    answerChecker.oldIsAsciiPresent = answerChecker.isAsciiPresent;
    answerChecker.isAsciiPresent = function(e) {
        // this is for trailing N to ン
        if(e[e.length-1] === 'N') {
            e = e.substr(0, e.length-1) + 'ン' + e.substr(e.length);
        }
        return answerChecker.oldIsAsciiPresent(e);
    };

    answerChecker.oldEvaluateKM = answerChecker.evaluate;
    answerChecker.evaluate = function(e,t) {
        //console.log($.jStorage.get('currentItem'));
        // this is for trailing N to ン
        if(e === "reading" && t[t.length-1] === 'N') {
            t = t.substr(0, t.length-1) + 'ン' + t.substr(t.length);
        }
        if(isOnyomiReview()) {
            for (var i = 0; i < $.jStorage.get('currentItem').on.length; i++) {
                $.jStorage.get('currentItem').on[i] = convertToKata($.jStorage.get('currentItem').on[i]);
            }
        }
        //console.log($.jStorage.get('currentItem'));
        return answerChecker.oldEvaluateKM(e,t);
    };

    $('#user-response').on('input', function() {
        if(isOnyomiReview()) {
            this.value = $(this).val().toUpperCase();
        }
    });

    var observeMe = $('#item-info .pure-u-1-4')[0];
    observeDOM()( observeMe ,function() {
        if(isOnyomiReview()) {
            $('#item-info-reading > span').text(convertToKata($('#item-info-reading > span').text()));
        }
    });

    // change last 10 items
    var last10Change = function () {
        if(isOnyomiAll($(this).find('li').eq(0).text())){
            $(this).find('li').eq(1).text(convertToKata($(this).find('li').eq(1).text()));
        }
    };
    var observeMe = $('#last-items-list')[0];
    observeDOM()( observeMe ,function() {
        $('#last-items-list .kanji').each(last10Change);
    });
}
else if (/review/.test(document.URL)) // Review info page at the beginning and the end of a review
{
    var observeMe = $('#reviews-summary')[0];
    observeDOM()( observeMe ,function() {
        var e = $('.kanji .hover');
        if(e.length !== 0 && isOnyomiAll(e.prev('a').eq(0).text())) {
            var onyomiNode = e.find('ul').find('li').eq(1);
            onyomiNode.text(convertToKata(onyomiNode.text()));
        }
    });
}
else if (/lesson\/session/.test(document.URL)) // Lesson and lesson test page
{
    //--------- Lesson Part ---------//
    var whenLessonSlides = function () {
        // Kanji info
        var type = $("#supplement-kan-reading-type").text();
        if(type == "on'yomi") {
            $('#supplement-kan-reading span').eq(1).text(convertToKata($('#supplement-kan-reading span').eq(1).text()));
        }
        // Vocable breakdown info
        $("#supplement-voc-breakdown").find('.kanji').each(replaceBreakdown);
    };
    var replaceBreakdown = function () {
        if(isOnyomiAll($(this).text())) {
            $(this).attr("title", convertToKata($(this).attr('title')));
        }
    };
    $('#batch-items').click(whenLessonSlides);

    //--------- Test Part ---------//
    answerChecker.oldIsAsciiPresent = answerChecker.isAsciiPresent;
    answerChecker.isAsciiPresent = function(e) {
        // this is for trailing N to ン
        if(e[e.length-1] === 'N') {
            e = e.substr(0, e.length-1) + 'ン' + e.substr(e.length);
        }
        return answerChecker.oldIsAsciiPresent(e);
    };

    answerChecker.oldEvaluateKM = answerChecker.evaluate;
    answerChecker.evaluate = function(e,t) {
        // this is for trailing N to ン
        if(e === "reading" && t[t.length-1] === 'N') {
            t = t.substr(0, t.length-1) + 'ン' + t.substr(t.length);
        }
        if(isOnyomiLesson()) {
            for (var i = 0; i < $.jStorage.get('l/currentQuizItem').on.length; i++) {
                $.jStorage.get('l/currentQuizItem').on[i] = convertToKata($.jStorage.get('l/currentQuizItem').on[i]);
            }
        }
        return answerChecker.oldEvaluateKM(e,t);
    };

    $('#user-response').on('input', function() {
        if(isOnyomiLesson()) {
            this.value = $(this).val().toUpperCase();
        }
    });

    var observeMe = $('#item-info .pure-u-1-4')[0];
    observeDOM()( observeMe ,function() {
        if(isOnyomiLesson()) {
            $('#item-info-reading span').text(convertToKata($('#item-info-reading span').text()));
        }
    });

}else if (/lesson/.test(document.URL)) // Lesson info page at the beginning and the end of a run
{
    var observeMe = $('#kanji')[0];
    observeDOM()( observeMe ,function() {
        var e = $('.kanji .hover');
        if(e.length !== 0 && isOnyomiAll(e.prev('a').eq(0).text())) {
            var onyomiNode = e.find('ul').find('li').eq(1);
            onyomiNode.text(convertToKata(onyomiNode.text()));
        }
    });
}

// Search result
if( /dashboard/.test(document.URL) || document.URL == "http://www.wanikani.com/" || document.URL == "https://www.wanikani.com/" || /\/level/.test(document.URL) ||
   /\/lattice/.test(document.URL) || /\/radicals/.test(document.URL) || /\/kanji/.test(document.URL) || /\/vocabulary/.test(document.URL) ||
   /\/community/.test(document.URL) || /\/chat/.test(document.URL) || /\/account/.test(document.URL) ) {
    var searchChange = function() {
        if(isOnyomiAll($(this).find('span').text())) {
            $(this).find('li').eq(0).text(convertToKata($(this).find('li').eq(0).text()));
        }
    };
    var observeMe = $('.search-results')[0];
    observeDOM()( observeMe ,function() {
        $('.search-results #kanji-').each(searchChange);
    });
}



//-- Helper functions for transforming kata <-> hira --//
function isOnyomiReview() {

    var objCurItem = $.jStorage.get("currentItem");
    var strQuestionType = $.jStorage.get("questionType");

    if ("kan" in objCurItem) {
        // Kanji
        if (strQuestionType == "reading") {
            if(objCurItem.emph == "onyomi") {
                return true;
            }
        }
    }
    return false;
}

function isOnyomiLesson() {

    var objCurItem = $.jStorage.get("l/currentQuizItem");
    var strQuestionType = $.jStorage.get("l/questionType");

    if ("kan" in objCurItem)
    {
        // Kanji
        if (strQuestionType == "reading") {
            if(objCurItem.emph == "onyomi"){
                return true;
            }
        }
    }
    return false;
}

function isOnyomi(kanji, level)
{
    switch(level) {
        case 'PLEASANT': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '10':
            return kanjiYomiPLEASANT[kanji];
        case 'PAINFUL': case '11': case '12': case '13': case '14': case '15': case '16': case '17': case '18': case '19': case '20':
            return kanjiYomiPAINFUL[kanji];
        case 'DEATH': case '21': case '22': case '23': case '24': case '25': case '26': case '27': case '28': case '29': case '30':
            return kanjiYomiDEATH[kanji];
        case 'HELL': case '31': case '32': case '33': case '34': case '35': case '36': case '37': case '38': case '39': case '40':
            return kanjiYomiHELL[kanji];
        case 'PARADISE': case '41': case '42': case '43': case '44': case '45': case '46': case '47': case '48': case '49': case '50':
            return kanjiYomiPARADISE[kanji];
        case 'REALITY': case '51': case '52': case '53': case '54': case '55': case '56': case '57': case '58': case '59': case '60':
            return kanjiYomiREALITY[kanji];
        default:
            return 0;
    }
}
function isOnyomiAll(kanji)
{

    if(kanjiYomiPLEASANT[kanji]) return 1;
    if(kanjiYomiPAINFUL[kanji]) return 1;
    if(kanjiYomiDEATH[kanji]) return 1;
    if(kanjiYomiHELL[kanji]) return 1;
    if(kanjiYomiPARADISE[kanji]) return 1;
    if(kanjiYomiREALITY[kanji]) return 1;
    return 0;

}
function convertToKata(chain)
{
    chain = chain.trim();
    for (var i = 0, c = chain.length; i < c; i++)
    {
        chain = replaceAt(chain, i, hiraToKata[chain[i]] || chain[i]);
    }
    return chain;
}

function convertToHira(chain)
{
    chain = chain.trim();
    for (var i = 0, c = chain.length; i < c; i++)
    {
        chain = replaceAt(chain, i, kataToHira[chain[i]] || chain[i]);
    }
    return chain;
}

function replaceAt(s, n, t)
{
    return s.substring(0, n) + t + s.substring(n + 1);
}

/*
* Wait for elements to appear
* call with observeDom()(observNode, callbackFunction);
* from stackoverflow: http://stackoverflow.com/a/14570614
*/
function observeDOM() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;
    return function(obj, callback){
        if( MutationObserver ) {
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer) {
                if( mutations[0].addedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
}

/*
* Only used for generating onyomiList
* Can also be used to load kanji onyomi informations from server (slow)
*
* Update:
* Call with parameter of level and copy the string from the log window in one of the variables on the top
* e.g.
* console.log(loadKataFromApi("PLEASANT"));
*/
function loadKataFromApi(level) {
    var levels;
    switch(level) {
        case 'PLEASANT':
            levels = "1,2,3,4,5,6,7,8,9,10";
            break;
        case 'PAINFUL':
            levels = "11,12,13,14,15,16,17,18,19,20";
            break;
        case 'DEATH':
            levels = "21,22,23,24,25,26,27,28,29,30";
            break;
        case 'HELL':
            levels = "31,32,33,34,35,36,37,38,39,40";
            break;
        case 'PARADISE':
            levels = "41,42,43,44,45,46,47,48,49,50";
            break;
        case 'REALITY':
            levels = "51,52,53,54,55,56,57,58,59,60";
            break;
        default:
            levels = '1';
    }

    var req = new XMLHttpRequest();
    req.open('GET', 'https://www.wanikani.com/api/user/' + apiKey + '/kanji/' + levels, true);
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
                var list = JSON.parse(req.responseText).requested_information;
                var output = {};

                for(var i=0; i < list.length; i++)
                {
                    output[list[i].character] = list[i].important_reading == "onyomi" ? 1 : 0;
                }
                console.log(JSON.stringify(output));

            } else {
                alert("error");
            }
        }
    };
    req.send();
}