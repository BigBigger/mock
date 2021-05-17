/*
 * @Author       : XiaoLei
 * @Date         : 2021-05-13 14:41:10
 * @LastEditTime : 2021-05-17 15:40:22
 * @LastEditors  : XiaoLei
 */
interface AnyObject {
  [key: string]: any
}

export type Color =
  "navy" | "blue" | "aqua" | "teal" | "olive"
  | "green" | "lime" | "yellow" | "orange"
  | "red" | "maroon" | "fuchsia" | "purple"
  | "silver" | "gray" | "black" | "white"

export type DateUnit =
  'year' | 'month' | 'week' | 'day'
  | 'hour' | 'minute' | 'second'

export type imgType = 'png' | 'gif' | 'jpg'

type MockTemplate = any;

interface MockMocked {
  rtype: string;
  rurl: string;
  template: MockTemplate;
}

export interface MockSetupSetting {
  timeout: number | string;
}

export interface MockRandoml {
  /**
   * @description: 随机生成一个布尔值，指定概率
   * @param {number} min
   * @param {number} max
   * @param {boolean} cur
   * @return {boolean}
   */
  bool(min?: number, max?: number, cur?: boolean): boolean;
  boolean(min?: number, max?: number, cur?: boolean): boolean;
  /**
   * @description: 把字符串的第一个字母转换为大写
   * @param {string} word
   * @return {string}
   */
  capitalize(word: string): string;
  /**
    随机生成一个常见的中文姓。
    [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
    [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
   */
  cfirst(): string;
  /**
   * @description: 生成一个传入字符串中的随机字符，或完全随机字符
   * @param {string} 从指定字符串类型或字符串中选取
   * @return {string}
   */
  char(pool?: string): string;
  character(pool?: string): string;
  /**
   * @description: 随机生成一个（中国）市
   * @param {boolean} [prefix = false] 增加省前缀
   * @return {string}
   */
  city(prefix?: boolean): string;
  // 随机生成一个常见的中文名
  clast(): string;
  // 随机生成一个常见的中文姓名
  cname(): string;
  /**
   * @description: 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
   * @param {string} name navy|blue|aqua|teal|olive|green|lime|yellow|orange|red|maroon|fuchsia|purple|silver|gray|black|white
   * @return {string}
   */
  color(name?: Color): string;
  /**
   * @description: 随机生成一个（中国）县。
   * @param {prefix} [boolean = false] 是否增加省市前缀
   * @return {string}
   */
  county(prefix?: boolean): string;
  /**
   * @description: 随机生成一段中文文本
   * @param {number} [min = 3] 最小长度
   * @param {number} [max = 7] 最大长度
   * @return {string}
   */
  cparagraph(min?: number, max?: number): string;
  /**
   * @description: 随机生成一句中文句子
   * @param {number} [min = 12] 最小长度
   * @param {number} [max = 18] 最大长度
   * @return {string}
   */
  csentence(min?: number, max?: number): string;
  /**
   * @description: 随机生成一条中文标题
   * @param {number} [min = 3] 最小长度
   * @param {number} [max = 7] 最大长度
   * @return {string}
   */
  ctitle(min?: number, max?: number): string;
  /**
   * @description: 随机生成一个或多个汉字
      最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
   * @param {string} pool 从给定字符串类型或字符串中选取
   * @param {number} [min = 1] 最小长度
   * @param {number} [max = min] 最大长度
   * @return {string}
   */
  cword(pool?: string, min?: number, max?: number): string;
  // 随机生成一个1-x之间自然数
  d4(): number;
  d6(): number;
  d8(): number;
  d12(): number;
  d20(): number;
  d100(): number;
  /**
   * @description: 随机生成一段 Base64 图片编码
      https://github.com/imsky/holder
   * @param {string} size 图片的宽高，形如'widthxheight'
   * @param {string} [text = size] 文本内容，默认为size
   * @return {string}
   */
  dataImage(size?: string, text?: string): string;
  /**
   * @description: 随机生成一个日期字符串
   * @param {string} [format = 'yyyy-MM-dd'] 日期格式化
   * @return {string}
   */
  date(format?: string): string;
  /**
   * @description: 随机生成一个时间字符串
   * @param {string} [format = 'yyyy-MM-dd HH:mm:ss'] 日期格式化
   * @return {string}
   */
  datetime(format?: string): string;
  /**
   * @description: 随机生成一个域名
   * @param {string} tld 域名后缀
   * @return {string}
   */
  domain(tld?: string): string;
  /**
   * @description: 随机生成一个邮箱
   * @param {string} tld 域名
   * @return {string}
   */
  email(domain?: string): string;
  // 工具函数，用于拓展Random
  extend<T>(obj: T, ...prop: any[]): T;
  // 随机生成一个常见的英文名
  first(): string;
  /**
   * @description: 随机生成一个浮点数
   * @param {number} [min = -2^53 + 1] 整数部分最小值
   * @param {number} [max = 2^53 - 1] 整数部分最大值
   * @param {number} [dmin = 0] 小数部分最小值
   * @param {number} [dmax = 17] 小数部分最大值
   * @return {number}
   */
  float(min?: number, max?: number, dmin?: number, dmax?: number): number;
	/**
    随机生成一个 GUID
    http://www.broofa.com/2008/09/javascript-uuid-function/
    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
      UUIDs (Universally Unique IDentifier)
      GUIDs (Globally Unique IDentifier)
      The formal definition of the UUID string representation is provided by the following ABNF [7]:
        UUID                    = time-low "-" time-mid "-"
                                  time-high-and-version "-"
                                  clock-seq-and-reserved
                                  clock-seq-low "-" node
        time-low                = 4hexOctet
        time-mid                = 2hexOctet
        time-high-and-version   = 2hexOctet
        clock-seq-and-reserved  = hexOctet
        clock-seq-low           = hexOctet
        node                    = 6hexOctet
        hexOctet                = hexDigit hexDigit
        hexDigit =
          "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
          "a" / "b" / "c" / "d" / "e" / "f" /
          "A" / "B" / "C" / "D" / "E" / "F"
    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
	 */
  guid(): string;
  // 随机生成一个hex颜色 '#DAC0DE'
  hex(): string;
  // 随机生成一个hex颜色 'hsl(300,80%,90%)'
  hsl(): string;
  /**
    随机生成一个 18 位身份证
    [身份证](http://baike.baidu.com/view/1697.htm#4)
      地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
   */
  id(): string;
  /**
   * @description: 随机生成一个图片地址
      替代图片源 http://fpoimg.com/
      参考自 http://rensanning.iteye.com/blog/1933310
      http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
   * @param {string} size 图片的宽高，形如'widthxheight'
   * @param {string} background 背景色，hex
   * @param {string} foreground 字体色，hex
   * @param {string} format 文件格式 'png','jpg','gif'
   * @param {string} text 文本内容，不支持中文
   * @return {string} 在线图片地址, http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
   */
  image(size: string, background: string, foreground: string, format: string, text: string): string;
  image(size: string, background: string, foreground: string, text: string): string;
  image(size: string, background: string, text: string): string;
  img(size: string, background: string, foreground: string, format: imgType, text: string): string;
  img(size: string, background: string, foreground: string, text: string): string;
  img(size: string, background: string, text: string): string;
  /**
   * @description: 生成一个全局的自增整数,类似数据库自增主键
   * @param {number} [step = 1] 自增步长
   * @return {number}
   */
  inc(step: number): number;
  increment(step: number): number;
  /**
   * @description: 随机生成一个整数
   * @param {number} [min = -2^53 + 1] 整数部分最小值
   * @param {number} [max = 2^53 - 1] 整数部分最大值
   * @return {number}
   */
  int(min: number, max: number): number;
  integer(min: number, max: number): number;
  // 随机生成一个IP地址
  ip(): string;
  // 随机生成一个常见的英文姓
  last(): string;
  /**
   * @description: 把字符串转为小写
   * @param {string} str 转换的字符串
   * @return {string}
   */
  lower(str: string): string;
  /**
   * @description: 随机生成一个常见的英文姓名
   * @param {boolean} middle 以空格分隔
   * @return {string}
   */
  name(middle: boolean): string;
  /**
   * @description: 随机生成一个自然数
   * @param {number} [min = 0] 最小值
   * @param {number} [max = 2^53 - 1] 最大值
   * @return {number}
   */
  natural(min: number, max: number): number;
  /**
   * @description: 随机生成一个时间字符串
   * @param {string} unit 单位
   * @param {string} [format = 'yyyy-MM-dd HH:mm:ss'] 日期格式化
   * @return {string}
   */
  now(unit: DateUnit): string;
  now(format: string): string;
  now(unit: DateUnit, format: string): string;
  /**
   * @description: 顺序获取数组中的元素
      [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
      不支持单独调用！
   * @param {array} 数据数组
   * @return {any}
   */
  order<T>(array: Array<T>): Array<T>;
  /**
   * @description: 随机生成一段英文文本
   * @param {number} [min = 3] 最小长度
   * @param {number} [max = 7] 最大长度
   * @return {string}
   */
  paragraph(min?: number, max?: number): string;
  /**
   * @description: 随机获取一个数组或参数中的元素
   * @param {array} arr 数据数组
   * @param {number} [min = 1] 最小下标
   * @param {number} [max = min] 最大下标
   * @return {any}
   */
  pick<T>(arr: T[], min?: number, max?: number): T;
  pick<T>(...arr: T[]): T;
  // 随机生成一个URL协议
  protocol(): string;
  // 随机生成一个（中国）省（直辖市、自治区、特别行政区）
  province(): string;
  /**
   * @description: 生成一个整型数组
   * @param {number} [start = 0] 开始值
   * @param {number} [stop = start] 结束值
   * @param {number} [step = 1] 步长
   * @return {Array<number>}
   */
  range(start?: number, stop?: number, step?: number): number[];
  // 随机生成一个地理和文化分区
  region(): string;
  // 随机生成一个hex颜色 'rgb(128,255,255)'
  rgb(): string;
  // 随机生成一个hex颜色 'rgb(128,255,255,0.3)'
  rgba(): string;
  /**
   * @description: 随机生成一句英文句子
   * @param {number} [min = 12] 最小长度
   * @param {number} [max = 18] 最大长度
   * @return {string}
   */
  sentence(min?: number, max?: number): string;
  /**
   * @description: 打乱数组中元素的顺序
   * @param {Array} arr 数据数组
   * @param {number} [min = 1] 生成数组的最小长度
   * @param {number} [max = min] 生成数组的最小长度
   * @return {Array<any>}
   */
  shuffle<T>(arr: T[], min: number, max: number): T[];
  /**
   * @description: 随机生成一个字符串
   * @param {string} pool 从制定字符串中获取
   * @param {string} [min = 3] 最小长度
   * @param {string} [max = 7] 最大长度
   * @param {string} length 文本长度
   * @return {string}
   */
  str(): string;
  string(length: number): string;
  string(min: number, max: number): string;
  string(pool: string, min: number, max: number): string;
  /**
   * @description: 随机生成一个时间字符串
   * @param {string} [format = 'HH:mm:ss'] 日期格式化
   * @return {string}
   */
  time(format: string): string;
  /**
   * @description: 随机生成一条英文标题
   * @param {number} [min = 3] 最小长度
   * @param {number} [max = 7] 最大长度
   * @return {string}
   */
  title(min?: number, max?: number): string;
  /**
    随机生成一个顶级域名后缀
    国际顶级域名 international top-level domain-names, iTLDs
    国家顶级域名 national top-level domainnames, nTLDs
    [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
   */
  tld(): string;
  /**
   * @description: 把字符串转为大写
   * @param {string} str 转换的字符串
   * @return {string}
   */
  upper(str: string): string;
  /**
   * @description: 随机生成一个URL
      [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
        http                    Hypertext Transfer Protocol
        ftp                     File Transfer protocol
        gopher                  The Gopher protocol
        mailto                  Electronic mail address
        mid                     Message identifiers for electronic mail
        cid                     Content identifiers for MIME body part
        news                    Usenet news
        nntp                    Usenet news for local NNTP access only
        prospero                Access using the prospero protocols
        telnet rlogin tn3270    Reference to interactive sessions
        wais                    Wide Area Information Servers
   * @param {string} protocol 协议
   * @param {string} host 域名
   * @return {string}
   */
  url(protocol?: string, host?: string): string;
  // 随机生成一个 GUID
  uuid(): string;
  /**
   * @description: 随机生成一个或多个单词
   * @param {string} pool 从给定字符串类型或字符串中选取
   * @param {number} [min = 1] 最小长度
   * @param {number} [max = min] 最大长度
   * @return {string}
   */
  word(min?: number, max?: number): string;
  /**
   * @description: 随机生成一个邮政编码
   * @param {number} [len = 6] 长度
   * @return {string}
   */
  zip(len: number): string;
  /**
   * @description: 日期格式化
   * @param {Date} date 日期
   * @param {string} format 格式化
   * @return {string}
   */
  _formatDate(date: Date, format: string): string;
  /**
   * @description:  随机生成一个有吸引力的颜色
      http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      https://github.com/devongovett/color-generator/blob/master/index.js
   * @param {number} saturation 饱和度
   * @param {number} value 亮度
   * @return {array<number>}
   */
  _goldenRatioColor(saturation: number, value: number): number[];
  /**
   * @description: 随机生成一个日期对象
   * @param {number} [min = 0] 最小日期时间戳
   * @param {number} [max = Date.now()] 最大日期时间戳
   * @return {Date}
   */
  _randomDate(min: number, max: number): Date;
}

export interface MockJSONSchema {
  name: string | undefined;
  type: string | undefined;
  path: Array<string>;
  rule: AnyObject;
  template: MockTemplate;
}

export declare interface Mock {
  // 配置拦截 Ajax 请求时的行为。支持的配置项有：timeout
  setup(setting: MockSetupSetting): MockSetupSetting;
  // 根据数据模板生成模拟数据。
  mock<T>(template: T): T;
  // 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
  mock(rurl: string, template: MockTemplate): Mock;
  // 记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
  mock(rurl: string, rtype: string, template: MockTemplate): Mock;

  valid(template: MockTemplate, data: any): boolean;

  // 把 Mock.js 风格的数据模板 template 转换成 JSON Schema。
  toJSONSchema(template: MockTemplate, data: any): MockJSONSchema;

  Random: MockRandoml;

  readonly version: string;
  readonly _mocked: MockMocked;
}

export default Mock;
