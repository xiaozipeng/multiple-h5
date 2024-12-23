## 1.1.14125（2024-11-14）
14124 SetSubFrameOption()增加高度设置  
14122 小程序把窗口框架设置放在SetSubFrameOption()里面  
## 1.1.14116（2024-11-11）
14114 修正K线JSFloatTooltip， 底部显示不下， 显示在鼠标上部  
14113 报价列表增加分时图提示信息  
14112 小程序分时图增加支持北交所  
14111 k线弹出分时图配置格式修改  
14109 K线上弹出分时图代码优化  
14107 报价列表增加10个预留按钮  
14105 修正报价列表tooltip提示信息位置显示不正确  
14103 报价列表进度条支持渐近色  
14101 指标切换对话框增加点击按钮回调事件  
## 1.1.14084（2024-11-05）
14083 T型报价FormatReserveNumber(),FormatReserveString()增加判断股票数据是否存在  
14080 报价列表修正 FormatReserveNumber(),FormatReserveString(),
 FormatReserveProgressBar() 没有判断数据有效性  
14078 报价列表增加10个预留进度条  
## 1.1.14042（2024-10-29）
14041 小程序修正分时图指标设置不支持YAxis属性  
14039 修正分时图设置指标YAxis属性无效  
14036 T型报价右侧滚动条增加样式2  
14035 报价列表RESERVE_STRING1_ID字段支持独立的背景色，字体颜色设置   
## 1.1.13992（2024-10-21）
13992 小程序修正KLineChartContainer::Update()叠加数据报错  
13990 JSReportChartContainer::RequestStockData()回调增加symbol,和name字段  
13988 删除形态匹配代码   
13987 区间选中按钮禁止选中   
13986 JSDialogTooltip增加默认的字段明颜色和字段值颜色配置   
## 1.1.13947（2024-10-09）
修改测试示例代码
## 1.1.13946（2024-10-09）
13945 分时图修正点击模式搜手势操作没有考虑十字光标状态
## 1.1.13922（2024-09-30）
13920 dialogtooltip增加期货的 持仓，结算价字段  
13919 小程序分时图支持设置十字光标的HPenType，VPenType属性值  
13917 JSDialogTooltip增加换手率  
## 1.1.13909（2024-09-26）
13907 MinuteLeftTooltipPaint增加ReloadResource()函数  
13906 MinuteFrame::ReloadResource()增加集合竞价配色加载  
13903 框子外的刻度文字输出位置支持Y轴偏移控制 
## 1.1.13900（2024-09-24）
13899 小程序修正UpdateOverlayRealtimeData()新增日期失败  
13898 修正UpdateOverlayRealtimeData()新的日期数据更新失败  
## 1.1.13857（2024-09-20）
13856 K线滚动条滑块左右时间增加支持秒级K线
## 1.1.13807（2024-09-10）
13806 小程序修正日盘夜盘风格配置报错  
13803 报价列表增加SetSelectedRow()设置选中行  
## 1.1.13802（2024-09-09）
13800 小程序专业财务数据函数（GPJYVALUE，GPJYONE，SCJYVALUE，SCJYONE，BKJYVALUE，BKJYONE） 代码重构  
13799 修正区间选择空数据报错  
13798 专业财务函数（GPJYVALUE，GPJYONE，SCJYVALUE，SCJYONE，BKJYVALUE，BKJYONE）代码重构  
## 1.1.13786（2024-09-03）
13784 小程序STICKLINE宽度为0时，绘制线段宽度为1的竖线  
13783 ChartStickLine调整为0时，绘制1宽度的竖线  
13782 修正ResetFrameYCustomSplit()漏了参数  
13780 增加重置Y轴自定义刻度接口ResetFrameYCustomSplit  
13779 修正DrawOutRangeCustomItem()左侧不输出文字  
13777 DrawOutRangeCustomItem支持坐标左侧  
## 1.1.13764（2024-08-27）
13762 小程序APIScriptIndex::FittingData()线段增属性IsShowTitle，BreakPoint，isDotLine，lineDash，isSingleLine  
13761 APIScriptIndex::FittingData() 线段数据增加属性isDotLine，lineDash，isSingleLine  
## 1.1.13760（2024-08-26）
13759 修改ChartDrawHLine右侧标签页显示样式  
13756 ChartDrawHLine 代码重构，增加限制只显示在对应的窗口范围内  
13752 小程序指标脚本增加函数LINEDASH()  
13751 指标脚本增加函数LINEDASH()  
13750 修改DOTLINE代码逻辑  
13749 小程序增加DOTLINE虚线设置  
13748 小程序修正黑色风格下指标数值箭头颜色配置错误  
13747 ChartClipColorStick修正没有获取当前屏第1个数据的，上一条数据。  
13745 ChartClipColorStick上下增加数值显示   
13744 ChartClipColorStick增加差值同向显示   
## 1.1.13743（2024-08-22）
13742 小程序点击画线，如果移动禁止时，状态不改变  
13741 点击画图如果是禁止移动，状态不变  
## 1.1.13740（2024-08-22）
13737 小程序修改画图禁止移动代码逻辑  
13736 修改画图工具禁止移动手势逻辑  
13735 画图修改禁止移动代码逻辑  
## 1.1.13734（2024-08-22）
13733 分时图增加自定义背景色  
13731 小程序画图工具支持EnableMove属性  
13730 画图工具手势支持EnableMove属性  
13729 自定义Y轴刻度支持"TopEx","TopTitle","Top", "Bottom", "BottomEx", 和YOffset偏移  
13727 自定义刻度支持Top, Bottom特殊数值  
13726 报价列表tab弹出菜单支持Text字段  
13724 报价列表增加涨速，昨结算价，结算价，持仓量，开仓量，平仓量  
13723 内置键盘精灵增加隐藏时把焦点还回去  
## 1.1.13722（2024-08-20）
13721 小程序ChartStickLine同步web代码
## 1.1.13720（2024-08-20）
13719 ChartClipColorStick 增加固定数值范围功能
## 1.1.13705（2024-08-15）
13703 小程序K线增加一字板颜色设置  
13702 增加一字板颜色  
## 1.1.13673（2024-08-07）
13670 小程序MinuteTooltipPaint计算涨幅是增加判断昨收是0的情况  
13669 MinuteTooltipPaint，MinuteLeftTooltipPaint 计算涨幅时增加判断昨收等于0的情况  
13668 小程序FrameSplitMinutePriceY昨收价为0，不显示右侧刻度文字  
13667 FrameSplitMinutePriceY计算右侧百分比可以，昨收为0时不显示  
## 1.1.13640（2024-08-01）
13639 增加数值比较函数NumberCompare  
## 1.1.13623（2024-07-29）
13622 小程序事件ON_CUSTOM_CORSSCURSOR_POSITION支持横屏  
13621 小程序增加事件 'ON_CUSTOM_CORSSCURSOR_POSITION'  
13618 横屏十字光标支持自定义X轴文字输出位置   
13617 十字光标增加自定义设置X轴文字显示位置   
13616 小程序支持统一配置是否显示指标上涨下跌箭头   
13615 统一配置指标标题栏数值显示是否带上涨下跌箭头   
## 1.1.13614（2024-07-28）
13612 小程序指标数据增加上涨下跌箭头  
13611 小程序指标下拉箭头支持单独设置颜色  
13610 指标名字下拉箭头使用独立颜色  
13608 增加指标信息上涨下跌箭头类型  
13607 增加批量判断是否是数值类型函数 IFrameSplitOperator.IsNumberV2=function(...aryValue)  
## 1.1.13606（2024-07-26）
13605 小程序UpdateFrameMaxMinV2()默认计算Y轴自定义刻度  
13603 UpdateFrameMaxMinV2()默认启动Y轴自定义刻度计算  
13602 画图工具增加ChartDatePriceRange  
## 1.1.13565（2024-07-17）
13563 小程序增加事件ON_FORMAT_INDEX_OUT_TEXT   
13562 分时图内置右键菜单增加是否显示十字线选项   
13561 报价列表增加按钮   
13560 K线右键菜单增加是否显示十字光标十字线选项   
## 1.1.13559（2024-07-16）
13558 小程序事件ON_FORMAT_CORSSCURSOR_X_TEXT，ON_FORMAT_CORSSCURSOR_Y_TEXT 增加不显示设置  
13557 事件ON_FORMAT_CORSSCURSOR_X_TEXT， ON_FORMAT_CORSSCURSOR_Y_TEXT增加阻止默认显示  
13556 报价列表增加自定义checkbox  
## 1.1.13555（2024-07-16）
13554 报价列表增加checkbox   
13553 分笔支持设置时间格式   
13551 报价列表支持多选模式   
## 1.1.13531（2024-07-09）
13528 报价列表支持内置tooltip提示信息  
13529 MinuteChartContainer.JsonDataToMinuteData()修正单条日期无法修改  
## 1.1.13526（2024-07-08）
13524 小程序ChartMultiText和h5代码保持一致   
13523 1. 修正ChartMultiText文字没有居中对齐   
      2. 插件内部支持div大小变动自动调整画布大小   
13522 报价列表增加扩展画布支持   
13521 报价列表CUSTOM_STRING_TEXT_ID单独绘制   
13518 报价列表修正竖向滚动条底部越界   
13517 报价列表鼠标滚轴支持单行滚动   
## 1.1.13516（2024-07-05）
13515 修正十字光标绘制Y轴文字时报错
## 1.1.13513（2024-07-04）
13512 小程序报价列表走势列支持面积图   
13511 自定义十字光标右侧文字增加默认字体和颜色   
13509 小程序自定义十字光标右侧文字增加默认字体和颜色   
13507 小程序报价列表修正走势数据是空时报错   
13505 小程序修正深度图十字光标报错   
13503 小程序十字光标右侧文字输出代码整理   
13501 重构十字光标右侧文字输出代码   
13500 报价列表修正右侧边框线越界   
## 1.1.13495（2024-07-01）
13494 小程序增加事件“ON_SPLIT_XCOORDINATE”  
## 1.1.13490（2024-06-28）
13489 小程序增加上海能源交易-集运指数  
13488 增加上海能源交易所-集运指数  
12386 报表增加设置全部数据接口SetFullData  
## 1.1.13485（2024-06-26）
13484 增加分钟K线叠加示例  
13483 小程序增加中期所后缀'.CFFEX'  
13482 增加中期所后缀 .CFFEX  
13481 增加叠加K线更新数据示例  
13480 DrawInsideHorizontal()调整顶部坐标文字输出位置  
13479 小程序DrawInsideHorizontal，调整底部坐标文字输出位置  
## 1.1.13478（2024-06-26）
13477 走势图主图增加上下预留高度属性  
13476 小程序增加HorizontalReserved(预留上下高度)属性  
13474 SMA不计算小于周期的数据  
13469 DrawHorizontal()增加判断分割线是否在Y轴范围内  
13467 Y轴自动分割，增加分割算法类型，支持多种分割方式  
## 1.1.13464（2024-06-24）
13462 小程序指标标题栏增加底部分割线   
13461 标题圆角按钮增加判断是否支持函数roundRect   
## 1.1.13460（2024-06-24）
13459 走势图在手势操作时，不更新单日数据  
13458 小程序单日走势图， 手势操作时不更新数据  
13457 增加长按标识IsPress  
13456 小程序增加长按标识  
13454 滚动条支持点击移动到鼠标位置  
13453 小程序增加事件 ON_FORMAT_KLINE_HIGH_LOW_TITLE  
13452 增加事件 ON_FORMAT_KLINE_HIGH_LOW_TITLE  
## 1.1.13452（2024-06-24）
app端去掉设置IsClickShowCorssCursor
## 1.1.13451（2024-06-21）
13450 分时图标题增加保存JSChartContainer实例
13449 小程序分时图主图标题类增加保存JSChartContainer实例
## 1.1.13447（2024-06-21）
ver 13447 小程序指标脚本增加函数SYSPARAM
## 1.1.13446（2024-06-20）
ver 13446 小程序标题按钮样式修改
## 1.1.13445（2024-06-20）
13443 DrawVertical修正底部间距是0时，X分割线不绘制 
## 1.1.13441（2024-06-20）
13440 ChartVolStick绘制细线段时强制设置线段宽度1  
13437 AverageWidthFrame::DrawHorizontal()百分比坐标支持右对齐  
## 1.1.13436（2024-06-19）
13435 ChartMinutePriceLine面积图绘制底部  
13434 uniapp.h5增加导出IChartPainting，IExtendChartPainting，IChartTitlePainting，IChartDrawPicture  
## 1.1.13428（2024-06-18）
13427 ChartMinutePriceLine面积绘制是包含底部BottomSpace  
13426 MinuteHScreenFrame::GetYFromData()左侧位置计算错误  
## 1.1.13425（2024-06-18）
13424 小程序分时图支持设置BottomSpace, TopSapce
## 1.1.13423（2024-06-18）
13422 JSUniAppCanvasHelper.MeasureText修正","宽度
## 1.1.13420（2024-06-17）
13418 增加内置指标“持仓量”  
13417 小程序增加内置指标“持仓量”  
## 1.1.13416（2024-06-17）
13414 小程序指标语法增加SINGLELINE  
13413 指标语法增加SINGLELINE  
13409 GetRightData()修正漏填了第1个复权系数  
## 1.1.13396（2024-06-12）
13395 小程序叠加指标支持StickType  
13394 叠加指标支持StickType  
13392 小程序指标脚本增加函数STICKTYPE()  
13391 增加内置指标'VOL2'实心柱子  
13390 指标脚本增加函数STICKTYPE()  
13388 修正UIOnMouseDown()点击按钮以后IsOnTouch没有置false  
13387 SetLanguage()增加重置XY轴刻度文字  
## 1.1.13375（2024-06-05）
13373 画图工具修改对话框增加tooltip  
13372 小程序分时图创建画图工具时设置屏幕分辨率比  
13371 画图工具基类增加屏幕分辨率比值  
## 1.1.13366（2024-05-31）
修正函数名 MarkRow => MarkRaw
## 1.1.13365（2024-05-31）
13365 小程序增加ON_FINISH_DRAWPICTURE,ON_CLICK_DRAWPICTURE事件  
13362 增加菜单CMD_ADD_OVERLAY_INDEX_ID  
## 1.1.13362（2024-05-30）
vue3支持小程序
## 1.1.13361（2024-05-29）
13359 修正ChartInfoLine::SetOption()漏设置了选中点颜色   
13357 小程序ChangePeriod(),ChangeSymbol(),ChangeDayCount(),ChangeScriptIndex(),ChangeAPIIndex()增加清空Y轴最大最小值缓存   
13356 ChangeScriptIndex(),ChangeAPIIndex()增加清空Y轴最大最小值缓存   
13354 K线主图支持Y轴上下预留高度设置   
13352 changeIndex增加窗口属性设置   
## 1.1.13327（2024-05-20）
13325 画图修改增加文字颜色和背景色修改  
13323 增加函数BARSLASTS  
13322 增加函数“FILTERX”  
13320 小程序调整指标解释器变量解释的长度  
13316 指标翻译器增加变量值长度限制，防止内存爆掉。  
13315 重构画线修改对话框  
13312 画图工具增加监测线  
13310 GetDateTimeByPoint()修正数据位置没有加上数据偏移量  
13308 JSDialogDrawTool() 点颜色和线段颜色一致  
13307 分时图支持基准线类型切换  
## 1.1.13303（2024-05-16）
修改示例
## 1.1.13302（2024-05-16）
示例hqchart2_template支持小程序
## 1.1.13301（2024-05-15）
增加微信小程序demo
## 1.1.13300（2024-05-14）
13298 修改K线右键菜单K线类型显示错误  
13293 画图工具增加“ChartDrawCrosshair”  
13292 ChartDrawVerticalLine增加选中显示X轴和Y轴数值  
13289 分时图图DrawSelectedXBorder()，PtInMulitDayMinute()支持集合竞价模式  
## 1.1.13288（2024-05-13）
13287 画图工具对话框增加磁体功能  
13285 K线分时历史数据接收增加是否完全显示属性  
13284 脚本语法监测支持自定义变量和函数  
13283 DynamicChartTitlePainting 支持集合竞价  
13282 画图工具增加文字类  
13281 修改多日分时图集合竞价宽度计算方法  
13279 ClearYCoordinateMaxMin()支持指定窗口  
## 1.1.13260（2024-05-07）
修改readme
## 1.1.13259（2024-05-07）
13258 画图工具增加橡皮檫功能  
13257 ChartMultiText支持裁剪区域  
13256 ChartMultiLine 支持标题模式  
13255 ChartMultiSVGIcon, ChartMultiText支持标题模式  
13254 修正ChartDrawHLine按钮太多时无法显示  
13252 修正JS_DRAWTOOL_MENU_ID定义报错  
13250 Y轴增加自定义区域  
13248 内置弹出菜单增加disable状态  
13247 修正右键菜单“隐藏筹码图”报错  
## 1.1.13152（2024-04-10）
13150 小程序支持叠加指标Y轴刻度显示在主图Y轴上  
13149 叠加指标Y轴信息显示在主图Y轴上支持横屏  
13148 HQPriceStringFormat()修正叠加坐标显示在第3个主坐标上失败  
13146 小程序DeleteIndexPaint()增加GUID来判断指标窗口是否一致  
13145 修正DeleteIndexPaint()， 增加使用GUID判断框架是否一致  
13143 K线叠加指标Y轴刻度在主图显示， 增加十字光标数据显示  
13141 叠加指标Y轴坐标在主图Y轴刻度显示，支持输出格式设置  
13139 K线附图指标窗口支持叠加坐标显示在左右两侧主图Y轴上  
13137 调整K线high/low模式的裁剪区域  
13136 ChartKLine::DrawHighLow()支持显示每个柱子的最高，最低价格  
13134 自定义K线，增加函数DrawMaxMinPrice  
13131 KLineChartContainer::AutoUpdate()支持毫秒K线  
13130 报价列表增加日期列  
13128 报价列表增加时间字段  
13126 报价列表表头增加背景色设置  
13125 报价列表增加整列背景色  
13124 报价列表增加整列背景色  
13122 报价列表增加输出文字超出单元格长度显示样式设置  
## 1.1.13121（2024-03-28）
13119 ChartDrawPriceLineV2增加选中状态  
13118 小程序ChartDrawPriceLineV2增加选中状态  
13117 小程序分时图支持画图工具  
13116 报价列表支持设置单个表头文字颜色  
13115 ChangeCoordinateType()修正切换Y坐标类型以后没有重新计算Y轴刻度  
## 1.1.13114（2024-03-26）
13112 修正JSChartContainer::DataMove() 右侧判断多减了1个数据个数  
13111 小程序修正JSChartContainer::DataMove()右侧判断多减了1个数据个数  
## 1.1.13110（2024-03-26）
13109 小程序 增加ChartDrawPriceLineV2  
13108 ChartDrawPriceLineV2 支持文字输出位置控制  
13106 ChartDrawHLine支持框架内显示价格文字  
## 1.1.13105（2024-03-24）
13103 增加指标名称按钮类型 0=圆角边框 1=直角边框  
13102 报价列表右侧滚动条宽度计算调整  
13101 报价列表右侧支持滚动条  
## 1.1.13053（2024-03-06）
13052 小程序 MA, EMA, LLV, HHV,单数值周期的，使用parseInt把周期转成整形  
13050 MA,EMA,LLV,HHV 单值周期数值使用parseInt转成整形  
13048 小程序增加GetSHDecimal(), GetSZDecimal()  
13047 增加 GetSHDecimal(), GetSZDecimal()  
13032 小程序  
   1. 画图工具支持隐藏  
   2. 指标调用支持跨周期 'MA.MA2#WEEK'(5,12,18),RGB(200,200,200);  
13030 支持指标跨周期 "MA.MA1#WEEK"(M1,50,50);  
## 1.1.13029（2024-03-04）
13028 修正MinuteChartContainer.JsonDataToBeforeOpenData()昨收变量错误  
13025 KLineChartContainer.JsonDataToHistoryData() 增加流通股本  
## 1.1.13009（2024-02-27）
13008 ChartMultiSVGIcon修正动态计算图标的错误  
13007 分时图支持IsClickShowCorssCursor  
13004 小程序支持 IsClickShowCorssCursor  
13002 固定坐标刻度线增加右侧延长线  
## 1.1.12997（2024-02-26）
12996 扩展画法增加ID  
12995 小程序修改函数名 DeleteExtendChartPaint -> DeleteExtendChartByID  
12993 小程序增加设置未回补缺口函数 ChangePriceGap  
12992 小程序K线收盘价线，美国线，面积图支持显示未回补缺口  
## 1.1.12981（2024-02-23）
12979 修正ChartVolStick::HScreenDraw()柱子颜色错误  
12978 小程序增加外置扩展画法接口  
12976 主图指标数据支持设置是否参与计算Y轴的值  
12975 JSExplainer增加“DAY”变量解释  
## 1.1.12974（2024-02-22）
12972 修正ChartMultiText::BuildKey() 报错
## 1.1.12971（2024-02-21）
12970 SetSubFrameOption()增加 菜单栏 Export，MaxMin， TitleWindow 设置
## 1.1.12960（2024-02-19）
12959 MinuteFrame::DrawToolbarV2()价格图和成交量图支持自定义按钮  
12957 AddIndexWindow()使用JSIndexScript.ModifyAttribute修改指标属性  
12956 JSIndexScript.ModifyAttribute()增加KLineType属性设置  
12954 MinuteChartContainer::ChangeIndexTemplate()支持天数和股票代码设置  
12953 修正MinuteChartContainer::CreateOverlayWindowsIndex()没有处理外部指标参数  
## 1.1.12951（2024-02-17）
12949 小程序支持指标标题只隐藏主图指标标题  
12948 指标标题支持只隐藏主指标  
12946 小程序MinuteChartContainer::ChangeIndexTemplate()支持叠加指标  
12945 小程序KLineChartContainer::ChangeIndexTemplate() 支持叠加指标  
## 1.1.12935（2024-02-14）
12933 小程序增加指标属性修改函数 JSIndexScript.ModifyAttribute=function(indexInfo, attribute)  
12932 增加独立的指标属性修改函数 JSIndexScript.ModifyAttribute  
12929 JSChartResource配置增加 Frame.EnableRemoveZero  
12923 指标ＡＭＯ标题使用原始数据输出  
12921 小程序画图工具增加 射线，箭头，水平线  
## 1.1.12920（2024-02-03）
12919 RectSelectPaint()支持选中全部指标窗口  
12917 KLineFrame::SplitXYCoordinate()增加单独自定义刻度计算  
12916 SplitXYCoordinate()增加自定义刻度计算  
## 1.1.12913（2024-02-01）
12912 K线画图工具支持横屏  
12911 小程序K线图支持画图工具  
12907 小程序修正RecvOtherSymbolKData()函数对接数据报错  
12904 分时图区间选择增加单点模式  
12899 Y轴坐标支持多行输出  
## 1.1.12898（2024-01-23）
12897 横屏支持十字光标只在价格线上移动  
12896 小程序分时图横屏支持十字光标只在价格线移动  
12895 小程序分时图支持十字光标只在价格线上移动  
12894 增加小程序本地测试数据  
12891 删除"简单图形", "饼图","雷达图","地图" 代码  
12890 去掉不用的自定义指标  
12887 小程序修正K线图为空时拖拽下载历史数据报错  
12885 K线图修正当没有K线数据时，拖动下载历史数据报错  
## 1.1.12884（2024-01-16）
12883 优化ChartMACD代码  
12882 优化DrawVertical()函数速度  
12880 API线段指标支持设置是否显示指标数据在标题栏  
## 1.1.12879（2024-01-12）
12878 FittingData()代码整理  
12877 小程序FittingData代码整理  
12873 小程序修正ChartKLine::DrawColorKBar()修正判断开盘==收盘公式错误  
12872 修正ChartKLine::DrawColorKBar()判断开盘==收盘公式错误  
12869 OverlayScriptIndex::BindData()增加同步主窗口显示数据个数到叠加窗口  
12867 小程序分钟信息地雷支持设置圆点半径  
12866 分钟信息地雷支持圆点半径配置  
## 1.1.12861（2024-01-04）
12858 小程序指标计算引擎支持1元运算输出， 如-7， -(C+10),  -(C+10),RGB(100,100,100)  
12855 指标脚本解释器，支持一元计算输出，如-7， -(C+10), -7,RGB(10,10,10)  
12852 增加Syntax.UnaryExpression一元运算处理  
12839 优化ChartMACD绘图算法  
## 1.1.12833（2023-12-28）
修正JSChart.SetKLineZoom在uniapp+vue3编译报错
## 1.1.12831（2023-12-28）
12830 BindMainData()代码整理  
12828 KLineChartContainer增加cacheElement设置  
12826 ChartPartLine绘图优化  
12825 优化ChartPartLine绘图速度  
12824 优化ChartBand绘图速度  
12823 修正JSChartContainer::DocOnMouseMove()判断Splash状态错误  
## 1.1.12807（2023-12-19）
更新测试数据
## 1.1.12806（2023-12-19）
12801 缩放请求后台数据，不立即刷新页面
12800 RecvPreviousMinuteData()增加X轴数据移动参数1
12799 EnableSplashScreen()函数逻辑重新整理
12797 增加事件 ON_CREATE_CUSTOM_Y_COORDINATE
12796 增加事件 ScriptIndex::IsExcessRunCount()规则修改
## 1.1.12767（2023-12-05）
12765 小程序 ReqeustHistoryMinuteData函数名改为RequestHistoryMinuteData  
12764 函数名ReqeustHistoryMinuteData写错了，修正为RequestHistoryMinuteData  
12759 增加清空Y轴最小最小值缓存函数  
12756 小程序分时图支持设置价格线宽度  
12749 走势图测试数据增加925， 1300这2分钟的数据  
## 1.1.12748（2023-11-28）
12746 小程序增加 FROMOPEN  
12745 指标变量FROMOPEN使用通用变量下载模式  
## 1.1.12742（2023-11-28）
12740 X轴支持XLineExtend => Mode=2  
12739 ON_CREATE_OVERLAY_FRAME事件放在指标创建完成以后触发  
12738 增加指标窗口选中  
12736 K线支持窗口选中  
12735 修正ChartDrawSVG数据Y轴坐标计算错误  
12734 函数TIPICON支持叠加指标  
12732 HQTradeFrame::GetScaleTextWidth()不需要还原最大最小值  
## 1.1.12731（2023-11-23）
12728 K线增加左侧刻度位置设置  
12727 IChartFramePainting支持IsDrawLeftBorder    
12726 指标解释器增加函数 NAMELIKE  
12724 OnSize() 支持offsetHeight，offsetWidth  
12722 ON_DRAW_MINUTE_LAST_POINT返回点的位置分内部点位置和外部DOM点位置  
12718 ChartCorssCursor修正分时图叠加指标时报错  
12715 VOLSTICK支持LINETHICK1  
12712 指标窗口客户区域增加背景色  
12699 增加函数FIRSTDRAW  
12698 ChartDrawText增加区域裁剪  
12697 DRAWGBK支持叠加  
12696 ChartSingleText()增加区域剪切  
12695 ChartSingleText 支持标题模式  
## 1.1.12669（2023-11-14）
12667 小程序增加函数 STDDEV   
12665 小程序分时图十字光标右侧显示百分比文字   
12663 增加函数 STDDEV   
12660 增加系统指标 CDP-STD(趋势平衡点)   
12659 增加系统指标 CDP-STD(逆势操作)   
12657 增加系统指标 ICHIMOKU(一目均衡图)   
## 1.1.12628（2023-11-06）
12627 修正IChartDrawPicture::Move()内部变量写错了  
12625 STRFORMAT支持小数位数设置  
12624 MinuteChartContainer::OverlaySymbol() 支持股票数组  
## 1.1.12614（2023-11-02）
12609 MinuteChartContainer::RecvMinuteData()增加停止自动更新属性控制  
12606 IFrameSplitOperator.FormatValueString()把原始小数位和转换成“万”，“亿”以后的小数位分开设置  
12602 分笔列表支持倒序显示  
12599 小程序增加函数IFrameSplitOperator.FormatVolString  
12597 修正IFrameSplitOperator.FormatVolString()计算错误  
12594 JSScrollBarFrame::DrawVertical()修正变量未定义  
12587 K线滚动条支持毫秒K线  
## 1.1.12581（2023-10-24）
12578 小程序‘PhonePinch’增加K线缩放信息  
12577 K线PhonePinch变量增加缩放操作信息  
## 1.1.12540（2023-10-16）
12538 小程序修正RecvUpdateMinuteData()报错  
12537 修正CalculateExtendLineEndPoint()180度角时，数据点在K线屏外计算错误  
## 1.1.12536（2023-10-15）
12528 小程序分时图支持当日数据增量更新   
12523 画图工具整体移动的时候增加监测是否操作K线范围以外   
12521 DynamicMinuteTitlePainting::GetLatestKLineData()支持盘前集合竞价2.0数据格式   
12520 画图工具增加 ChartFibSpeedResistanceFan   
12519 ChartDrawPictureParallelChannel修正第3个点不显示  
12518 小程序增加指标手动隐藏变量  
12517 画图工具增加 ChartFibRetracement  
12515 分时图X轴刻度文字支持文字背景色  
12514 支持鼠标默认形状修改  
## 1.1.12513（2023-10-05）
12511 1. 修改分时图叠加股票算法  
      2. 增加函数DRAWOVERLAYKLINE  

12508 umychart.data.wechat.js 增加g_DataPlus导出  
## 1.1.12507（2023-09-26）
12506 小程序 DRAWICON(COND,PRICE,TYPE，MarkID)增加外部指定标识MarkID  
12504 HistoryDataStringFormat使用GetFormatTitle格式化  
12502 函数PLOYLINE(COND，PRICE)COND支持单数值  
## 1.1.12501（2023-09-21）
12500 小程序 互动易， 业绩预告，投资者关系，大宗交易，龙虎榜，策略信息 支持networkfilter数据外部对接  
12498 业绩预告, 调研, 大宗交易, 龙虎榜 数据增加NetworkFilter外部数据对接  
12496 申明文字增加背景色  
12495 小程序ChartVolStick横屏分时图柱子颜色算法调整  
12492 ON_SELECT_RECT事件增加e参数  
12491 ChartVolStick分时图横屏柱子颜色算法调整  
12487 分时图ON_KEYDOWN_SELECT_RECT_FIRST, ON_KEYDOWN_SELECT_RECT事件增加e变量  
## 1.1.12486（2023-09-20）
12485 小程序ChartVolStick分时图柱子颜色算法调整， 变量VOL分时图特殊处理  
12483 修正K线图IsShowTitleArrow属性设置无效  
12481 小程序修改 GT，GTE，LT，LTE，EQ, NEQ, COUNT, SUM 算法  
12479 修正拼写错误 IsShowTitleArraw=>IsShowTitleArrow  
12478 修正分时图设置IsShowNameArrow属性错误  
12477 ChartVolStick分时图柱子颜色独立计算  
12476 GetSymbolCacheData() VOL只在A股K线转成手  
12474 修正COUNT函数数组周期时，无效数和0周期的计算错误  
12473 GT,GTE,LT,LTE 增加NULL值判断  
12469 十字光标属性IsOnlyDrawMinute，支持集合竞价  
12468 K线指标增加执行次数限制  
## 1.1.12466（2023-09-15）
12464 小程序分时图计算涨幅，昨结算价和昨收盘分品种读取  
12462 走势图昨结算和昨收价分开存储  
12460 小程序setoption函数中变量JSChartContainer赋值提前  
12458 SetOption图形实例创建完成马上赋值给JSChartContainer  
12457 小程序分时图每条数据增加昨收字段  
12456 多日分时图涨幅使用单日昨收盘计算  
12454 分时图每条数据增加昨收字段  
12452 分时图和K线图增加ON_KEYDOWN事件  
12451 增加函数 IChartDrawPicture.HexToRGB()  
## 1.1.12450（2023-09-13）
12449 修正GetDateTimeByPoint()算法  
12447 分时图增加函数GetDateTimeByPoint()   
12444 小程序增加 HOUR，MINUTE   
12443 增加通达信HOUR， MINUTE变量  
12441 修改GT， GTE， LT，LTE，EQ，NEQ 算法   
12439 FrameSplitMinutePriceY增加共享Y轴叠加指标最大最小值   
12436 隐藏指标不计算最大最小值  
12434 小程序SUM，REF函数修正  
12432 1. REF支持单数值  
      2. SUM函数从第1个有效数据开始累加  
12430 ChartDrawSVG增加保存绘图区域对应数值  
12428 ON_KEYDOWN_SELECT_RECT_FIRST，ON_KEYDOWN_SELECT_RECT 增加e变量  
12421 增加自定义图形拖拽接口  
12419 画布去掉absolute属性  
12417 ChartMultiLine()支持手动显示隐藏  
12415 调整ChartDrawSVG::CalculateShowPosition()算法  
12413 ChartDrawSVG增加图标文字输出时调整上下位置，防止遮挡  
12411 小程序修改SetFillStyle()渐变色算法  
12409 修正SetFillStyle()渐变色算法  
12406 1. 小程序增加函数WEEKDAY  
      2. 叠加指标支持函数DRAWTEXTABS，DRAWTEXTREL  
12405 增加 WEEKDAY  
12404 叠加指标支持 DRAWTEXTREL，DRAWTEXTABS  
## 1.1.12403（2023-09-09）
12402 小程序增加 GetExtendChartByClassName， GetExtendChartByClassNameV2  
12395 CreateExtraCanvasElement支持z-index属性设置  
12393 小程序增加ON_RELOAD_INDEX_CHART_RESOURCE，ON_RELOAD_OVERLAY_INDEX_CHART_RESOURCE事件    
## 1.1.12391（2023-09-06）
12390 增加绘图事件 ON_BEFORE_DRAW，ON_BEFORE_DRAW_DYNAMIC_INFO  
12388 ChartMultiLine支持绘制圆点     
12386 CreateChartDrawSVG增加ON_RELOAD_INDEX_CHART_RESOURCE事件    
12383 ChartMultiLine支持计算所有数据的最大最小值  
12381 ChartDrawSVG::DrawDetail()右侧无法显示现在在左侧   
12378 ChartMultiLine增加左右延申线  
12374 1. 增加事件ON_CUSTOM_OVERLAY_TOOLBAR  
      2. ChartVolStick， ChartMACD 增加手动隐藏属性  
12373 指标信息增加指标ID  
12370 ScriptIndexConsole支持IsApiPeriod  
## 1.1.12345（2023-08-30）
由于内置测试数据接口停了，增加本地测试数据用例
## 1.1.12335（2023-08-29）
12332 内置测试数据地址改为127.0.0.1  
12331 内置测试数据请求改为127.0.0.1  
12330 去掉opensource相关域名的地址  
## 1.1.12321（2023-08-25）
12321 小程序修正版本号文件错误
## 1.1.12319（2023-08-17）
12319 小程序修正IChartPainting::IsMinuteFrame()不支持叠加框架  
12316 小程序增加版本号  
12312 增加版本信息  
## 1.1.12311（2023-08-16）
12310 小程序上期所增加氧化铝，合成橡胶， 广州期货所增加碳酸锂  
12309 上期所增加氧化铝，合成橡胶  
12308 广州期货增加LC(碳酸锂)  
12307 小程序CreateExtendChart()支持创建外部的MinuteTooltip实例  
12306 小程序分时图成交量柱子支持BarColorType属性修改  
12305 分时图成交量柱子支持BarColorType属性修改  
## 1.1.12304（2023-08-14）
12303 小程序FrameSplitMinutePriceY修正浮点数等于不准确  
12300 FrameSplitMinutePriceY()修正js精度问题导致查找收盘错误  
12299 K线图增加键盘和鼠标缩放K线，下载历史数据  
12296 小程序增加事件 ON_DELETE_FRAME，ON_CREATE_FRAME， ON_SIZE_FRAME  
12295 分时图增加副窗口动态创建增加事件ON_CREATE_FRAME，ON_DELETE_FRAME  
12294 分时图支持叠加指标  
## 1.1.12293（2023-08-10）
12293 小程序K线图增加事件ON_TOUCH_SCROLL_UP_DOWN  
12291 BackgroundPaint修正区间比当前屏日期小时，显示范围错误  
12290 小程序分时图支持ON_TOUCH_SCROLL_UP_DOWN事件  
12289 小程序分时图增加上下滚动  
12286 修正DrawOverlayIndex()单日分时图显示位置和主图指标标题不对齐  
12284 增加全局K线叠加坐标属性  
12283 增加K线和分时图指标窗口右侧按钮全局配置  
12282 指标标题插件支持只显示主图指标标题  
12280 小程序优化ChartVolStick绘图性能  
12278 优化ChartVolStick竖屏绘图性能  
## 1.1.12277（2023-08-04）
12276 增加ON_SIZE_FRAME事件  
12273 ChartVolStick调整横屏柱子颜色算法  
12272 小程序调整ChartVolStick柱子颜色算法  
12270 1. 修正JSCHART_OPERATOR_ID.OP_GOTO执行错误  
      2. 增加十字光标图层  
      3. 指标标题数据增加指标类实例  
12266 调整K线接收数据以后，绘图顺序  
12263 增加额外画布  
12258 PtInChart()，PtInOveralyChart()增加过滤隐藏指标  
12256 增加指标隐藏  
12255 BackgroundPaint修正区间范围大于当前屏不显示  
## 1.1.12253（2023-08-01）
12252 UIOnMouseMove 增加鼠标离开判断  
12250 MinuteFrame增加BeforeDrawXYCallback支持  
12248 增加AddExtendCallbackDraw接口  
12245 修正"BackgroundPaint","MinuteBackgroundPaint"没有添加到BeforeDrawXYCoordinate()中  
12244 回调事件挂接调整到初始化jschart以后  
## 1.1.12234（2023-07-20）
12232 K线增肌IsTitleShowLatestData属性  
12231 小程序增加指标数据推送接收数据接口  
12229 增加函数RecvWindowIndex  
12220 分时图OP_CORSSCURSOR_GOTO，增加不存在就隐藏十字光标  
12217 分时图OP_CORSSCURSOR_GOTO 支持多日  
12215 小程序增加g_DataPlus  
## 1.1.12209（2023-07-04）
12209 小程序JSSymbolData::GetSymbolData()支持K线数据外部对接  
12207 小程序ChartMinuteVolumBar增加新的柱子颜色逻辑  
12206 ChartMinuteVolumBar增加新的柱子颜色判断逻辑  
12205 小程序DrawColorKBar_MinBar()去掉绘制K线柱子部分  
12204 DrawColorKBar_MinBar() 去掉绘制柱子部分  
## 1.1.12203（2023-06-29）
12203 小程序K线删除函数DrawKBarV2()   
12201 修正彩色实心K线毛刺问题   
12200 小程序修正彩色实心K线柱子毛刺问题   
12199 小程序彩色K线代码优化   
12198 重构彩色K线代码   
12197 ReadIndexFunctionValue() 增加 MIN120，MIN240   
12196 jchart-chartdrawsvg-tooltip 禁止文字选中   
## 1.1.12195（2023-06-28）
12194 修正Y轴右侧自定义刻度背景色宽度错误   
12193 小程序Y轴自定义刻度支持多行输出   
12192 ChartDrawFibWedge 增加文字输出   
12191 画图工具增加 ChartDrawFibWedge   
## 1.1.12190（2023-06-21）
12189 小程序HistoryData.CopyRight()增加复制 ColorData，ExtendData  
12188 HistoryData.CopyRight() 增加ColorData，ExtendData数据复制  
## 1.1.12185（2023-06-20）
12184 ZoomDown()数据少于一屏数据，重新计算   
12183 小程序ZoomDown修正当数据少于一屏数据时无法缩小   
## 1.1.12180（2023-06-19）
12179 小程序ChartMultiPoint删除Path2D绘制点， 直接在画布上画了。 Path2D小程序不支持。   
12178 JSExplainer增加IFC，TESTSKIP，VALUEWHEN   
12177 小程序JSExplainer增加IFC，TESTSKIP，VALUEWHEN   
12176 小程序JSExplainer增加ZTPRICE，DTPRICE，BACKSET   
12175 JSExplainer增加 ZTPRICE,DTPRICE,BACKSET   
12174 小程序JSExplainer增加TFILTER   
12173 JSExplainer 增加TFILTER   
## 1.1.12172（2023-06-16）
12171 ChartMultiPoint修正缩放时点绘制到窗口外。   
12170 小程序支持 MULTI_POINT   
12169 MULTI_POINT 支持分时图   
12167 叠加指标支持 MULTI_POINT   
12165 增加 APIScriptIndex增加MULTI_POINT   
12162 增加 ReloadChartDrawPictureResource   
12160 画图工具选中点增加空心圆模式   
12159 注释掉 tr.context-menu.spinner   
## 1.1.12158（2023-06-13）
12158 小程序修正 KLineTooltipPaint::GetFormatTitle() 报错   
12154 ChartDrawPriceNote 增加存盘   
12153 画图工具增加 ChartDrawPriceNote   
## 1.1.12152（2023-06-12）
12151 h5页面tooltip增加额外宽度设置  
12150 小程序修正分钟K线图不显示叠加指标  
12149 小程序 KLineTooltipPaint， MinuteTooltipPaint 使用统一的格式化输出函数   
12146 修正ChartDrawPriceLabel()刻度点没有绘制在裁剪点上   
12145 画图工具增加 ChartDrawPriceLabel   
12143 AddIndexWindow，ChangeIndex 增加Lock参数   
12141 MinuteChartContainer.JsonDataToBeforeOpenData()增加日期有效判断   
12139 分时图重载函数IsMouseOnClient   
12137 DynamicMinuteTitlePainting()集合竞价标题显示没有判断高度是否够    
12136 MinuteTooltipPaint，KLineTooltipPaint 使用统一的格式化输出数据函数    
12135 HistoryDataStringFormat,DynamicKLineTitlePainting支持事件ON_CUSTOM_UNCHANGE_KLINE_TITLE_COLOR   
12134 ChartDrawAnchoredText 支持横屏   
12133 ChartDrawAnchoredText()坐标位置调整长，宽的占比   
12129 ChartDrawAnchoredText()支持限制宽度显示模式  
12128 ChartDrawNote修改文本字体设置   
12127 画图工具增加固定位置文本ChartDrawAnchoredText()    
12126 叠加指标标题输出支持小数位数输出   
12123 K线绘制DrawInfo()重新裁剪区域   
12122 修正函数CreateChartDrawPictureByStorage()没有绑定全局画图工具配置    
12121 ChartDrawNote统一配置   
12120 ChartDrawNote横屏支持文本上下文字自动调整   
12119 ChartDrawNote 支持横屏   
12118 ChartDrawNote 增加边框   
12116 增加DrawNote存盘功能  
12114 K线横屏支持EnableVerticalDrag  
12110 增加画图工具 Note   
12109 增加图标  
12108 小程序增加函数ToFixedPoint()，ToFixedRect()导出  
12107 增加函数ToFixedPoint，ToFixedPoint2，ToFixedRect 导出  
## 1.1.12101（2023-06-01）
12101 小程序分时图标题增加GetFormatTitle()统一格式化输出   
12100 小程序K线标题增加格式化输出函数GetFormatTitle()   
12098 增加GetFormatTitle()K线标题栏数据格式化   
12096 横屏多日分时图支持集合竞价  
12095 分时图增加GetFormatTitle()统一格式化连续交易标题格式化输出  
12094 小程序ChartArea支持顶部面积  
12092 GetCurrentAuctionData() 返回增加坐标信息   
12090 修正FormatCallAuctionTitle()报错变量未定义   
12088 整理分时图集合竞价DrawCallAuctionItem函数   
12087 分时图增加FormatCallAuctionTitle() 格式化集合竞价标题栏数据  
12086 ChartArea 向上面积图支持横屏  
12085 ChartArea 支持向上绘制面积  
12080 分时图增加 GetAfterCloseData()， GetBeforeOpenData() 函数  
12078 分时图和K线图增加自定义图形 DrawType==14  
12073 JsonDataToCallAuctionItem()当数据版本是1.0时A股成交量才需要除100  
12071 分时图价格线段使用工厂类创建  
## 1.1.12063（2023-05-24）
12062 修正JsonDataToBeforeOpenData 1.0格式数据报错
## 1.1.12061（2023-05-24）
12061 小程序增加 LINEAREA   
12060 小程序修正ChartVolStick负数柱子绘制错误   
12058 ChartArea 支持横屏   
12057 增加LINEAREA   
12056 ChangeInstructionIndex增加额外参数   
12054 GetCallAcutionSplitY() 修正1.0数据格式Y轴显示不对。   
## 1.1.12032（2023-05-18）
12031 扩展画法增加DrawAfterPicture属性  
12029 画图工具移动完成在磁吸模式下调整Y轴坐标  
12028 画图工具增加磁吸接口  
12025 报价列表增加 事件 ON_REPORT_DRAG_COLUMN_WIDTH  
12024 Setoption支持设置属性 ToolbarButtonStyle  
12021 K线图增加ON_CUSTOM_RIGHT_TOOLBAR事件  
12019 K线图增加ON_CUSTOM_LEFT_TOOLBAR事件  
12017 指标名称按钮修改样式  
12016 K线标题左侧增加自定义按钮  
12015 K线指标标题增加左侧自定义按钮  
## 1.1.12014（2023-05-09）
12013 小程序增加ON_CUSTOM_UNCHANGE_KLINE_COLOR事件  
12012 标题事件ON_TITLE_DRAW在重绘时，增加PointPosition。  
12005 修正demo实例， 创建K线时设置周期位置错误  
12003 整理画图工具平行通道代码  
12002 分时图和K线图允许Y轴刻度线允许设置为0  
12001 画线平行线增加中心线  
12000 画图工具水平线选中支持显示点在Y，X轴数值标签  

## 1.1.11913（2023-04-13）
11913 小程序增加叠加指标标题栏输出信息  
11912 小程序K线图增加删除叠加指标函数DeleteOverlayWindowsIndex  
11911 h5K线叠加指标代码移植到小程序  
11910 小程序窗口框架类ChartFrame迁移到独立的文件中  
## 1.1.11906（2023-04-11）
11905 小程序修正指标标题ArgumentsText没有清空  
11904 修正指标标题没有清空 ArgumentsText  
## 1.1.11903（2023-04-11）
11902 ON_FORMAT_CORSSCURSOR_Y_TEXT 支持叠加坐标  
11901 小程序十字光标StringFormatX，StringFormatY绑定Frame  
11899 K线十字光标 StringFormatX，StringFormatY 增加Frame的设置  
11897 小程序增加 ON_FORMAT_CORSSCURSOR_X_TEXT事件  
## 1.1.11886（2023-04-07）
11884 小程序指标标题样式修改  
11883 K线标题黑色风格颜色修改  
11882 指标标题横屏模式样式修改  
11881 指标标题黑色风格颜色修改  
11880 优化指标标题输出UI  
11879 分时图叠加股票 支持绝对叠加  
11878 分时图叠加支持绝对叠加  
11877 小程序 支持函数 DRAWGBK_DIV  
11876 小程序支持 RGBX+“RRGGBB”  
11875 小程序 分钟K线支持复权因子复权  
11873 ChartBackgroundDiv 修正横屏显示不正确  
11872 ChartBackgroundDiv 支持横屏  
11871 增加函数 DRAWGBK_DIV  
11870 增加颜色 RGBX+'RRGGBB'  
## 1.1.11861（2023-04-04）
11861 小程序增加 ON_SPLIT_XCOORDINATE定义  
11860 深度图增加ON_SPLIT_XCOORDINATE，ON_SPLIT_YCOORDINATE 事件  
11857 DepthChartCorssCursor tooltip输出格式整理  
11855 深度图增加 ON_SPLIT_XCOORDINATE， ON_SPLIT_YCOORDINATE 事件  
11854 分钟K线支持使用复权因子计算价格  
11853 小程序ChangeIndexTemplate支持后台API指标  
## 1.1.11852（2023-03-29）
11850 ChangeIndexTemplate 支持api指标  
11849 AnnouncementInfo公告支持分钟K线  
11847 修正金分割线类名写错了  
## 1.1.11846（2023-03-25）
11846 小程序分时图支持JSCHART_EVENT_ID.ON_CLICK_INDEXTITLE事件  
11844 分时图指标支持 JSCHART_EVENT_ID.ON_CLICK_INDEXTITLE 事件  
11842 增加分段线  
11840 十字光标右侧文字支持单行多颜色  
11839 修正ChartDrawPictureParallelChannel存盘时没有保存通道宽度  
## 1.1.11838（2023-03-23）
11838 小程序COLORSTICK和VolStick支持UPCOLOR,DOWNCOLOR  
11836 COLORSTICK 支持UPCOLOR, DOWNCOLOR  
11834 报价列表支持单个单元格背景色设置  
11833 报价列表增加事件 ON_REPORT_MOUSE_MOVE   
## 1.1.11813（2023-03-09）
11810 小程序把原来随便写的一个域名“www.121287.com”改成“数据地址” 不写具体域名了  
11809 把原来随便写的一个域名“www.121287.com”改成“数据地址” 不写具体域名了  
11807 IFrameSplitOperator.FormatDateTimeString() 时间自动识别秒  
## 1.1.11806（2023-03-09）
11806 小程序 修正MinuteChartContainer::ChangeIndexTemplate()删除指标框报错
## 1.1.11805（2023-03-09）
11804 分时图和K线图ChangeIndexTemplate()优化代码
11803 小程序分时图增加ChangeIndexTemplate函数  
11801 分时图增加ChangeIndexTemplate  
11800 DrawCustomItem()修正边框有毛边  
11708 增加K线图Y轴当前屏最有一个数据刻度文字输出  
## 1.1.11772（2023-03-02）
11770 ChartMultiText 输出位置支持 TOP, BOTTOM   
11768 小程序增加 SetFirstShowDate   
11764 ChartMultiText 文字输出增加YMove选项   
11763 增加指标引用函数 CALCSTOCKINDEX(品种代码,指标名称,指标线),返回该指标相应输出的计算值.              
## 1.1.11762（2023-03-01）
11761 ON_FORMAT_INDEX_OUT_TEXT 事件只能用于一般的指标标题  
11759 增加事件 ON_FORMAT_CORSSCURSOR_Y_TEXT 格式化十字光标Y轴刻度文字  
11757 K线自定义Y刻度，Type=2 当前屏最后一个K线收盘价刻度， 显示优化  
11755 修正分时图ChangeSymbol 跟换指标错误  
11753 MinuteChartContainer::ChangeSymbol() 支持切换指标  
11752 小程序增加 ISVALID，STRLEN，STRFORMAT，STRCMP  
## 1.1.11734（2023-02-14）
11733 修正JSScrollBarFrame::GetYFromData() 顶部和底部位置错误   
11732 K线图内置横向滚动条   
11730 KLineFrame::SetXShowCount 修正K线宽度太短了， 没有平均分   
11728 增加横向滚动条  
11727 小程序增加函数 UPCOLOR，DOWNCOLOR，XMOVE，YMOVE   
11725 分时图修正叠加指标指标框架没有同步GlobalOption配置项   
11723 叠加指标支持DRAWTEXT，DRAWICON 支持VALIGN0,VALIGN1,VALIGN2，ALIGN0,ALIGN1,ALIGN2  
11722 DRAWICON,DRAWTEXT增加 XMOVE(), YMOVE()扩展函数   
11720 支持脚本 T2:DRAWTEXT(CLOSE>OPEN,LOW,'大阳线'), COLORRED;   
11719 小程序支持  
      指标脚本支持绘图函数赋值模式的输出如  
      T2:DRAWTEXT(CLOSE>OPEN,LOW,'大阳线');   
      或  
      T3:DRAWTEXT(CLOSE>OPEN,LOW,'大阳线'),ALIGN1,VALIGN2, BACKGROUND(RGB(22,33,44),RGB(44,44,44));  
11717 图形KLineYAxisBGPaint修改颜色配置   
11715 ClearChartDrawPicture()增加时候刷新选项   
11714 指标脚本支持绘图函数赋值模式的输出如  
      T2:DRAWTEXT(CLOSE>OPEN,LOW,'大阳线');  
        或  
      T3:DRAWTEXT(CLOSE>OPEN,LOW,'大阳线'),ALIGN1,VALIGN2, BACKGROUND(RGB(22,33,44),RGB(44,44,44));    
11713 图形ChartSingleText，ChartDrawText支持数据导出  
11711 KLineYAxisBGPaint增加点位差文字背景色  
## 1.1.11684（2023-01-29）
11684 小程序增加TIMETOSEC，SECTOTIME   
11683 小程序增加 TIME2，WEEKOFYEAR，DAYSTOTODAY，TOTALFZNUM，TOTALBARSCOUNT，BARSTATUS，TQFLAG，MACHINEDATE，MACHINETIME，MACHINEWEEK  
11682 小程序增加 IFC， ALIGNRIGHT  
11681 小程序增加 OPI，ZSTJJ，SETTLE，QHJSJ，ISEQUAL，ISUP，ISDOWN  
11679 增加 函数SECTOTIME  
11678 增加函数 DAYSTOTODAY  
11677 增加函数 TIME2，SIGN，WEEKOFYEAR  
## 1.1.11623（2022-12-30）
11622 APIScriptIndex::FittingData支持PARTLINE  
11620 FittingMultiLine,FittingMultiText支持秒周期  
11618 K线图支持order book heat map  
11616 K线定制算法支持配置  
11615 小程序增加 广州期货交易所 .GZFE  
11614 增加广州期货交易所 .GZFE  
11612 分时图画图工具支持单点的IsDrawMain显示  
11610 画图工具按钮增加提示信息  
11608 修正FrameSplitMinutePriceY::GetMaxMin()如果有叠加指标计算错误    


## 1.1.11605（2022-12-15）
11605 小程序增加长按十字光标停留模式  
11603 画线增加限制窗口区域功能  
11602 小程序迁移指标  
11600 分时图增加 UpdateOverlayIndex  
11598 分时图增加 GetOverlayIndexByIdentify  
11595 AddChartDrawPicture增加GUID设置  
11593 分时图AddChartDrawPicture修正没有添加激活接口  
11591 ChartDrawHLine增加扩展数据  
11589 分时图增加手动添加绘图线功能  
11587 增加画图工具移动完成事件  
11585 ChartDrawHLine增加按钮配置外部设置  
11583 增加画图工具-水平线2  
11582 K线图增加长按显示十字光标不消失  
11581 小程序分时图增加股指期货IM品种  
11580 分时图股指期货增加IM  
11571 分时图支持新的一天数据插入  
## 1.1.11553（2022-11-26）
11552 小程序增加  KLineChartContainer::AddKLineInfo，KLineChartContainer::DeleteKLineInfo  
11551 修正MinuteChartContainer::BindOverlayPositionData()图形创建错误  
11549 分时图持仓量线使用独立的类ChartMinutePositionLine  
11547 DynamicMinuteTitlePainting 修正鼠标不在图形上显示最后数据错误  
11544 修正KLineFrame::CalculateCount()计算不精准  
11539 增加导出K线柱子和分时成交量柱子图形  
11538 分时成交量柱子支持外部替换  
## 1.1.11514（2022-11-14）
11513 小城修正WeeK函数计算错误  
11512 修正WEEK函数计算错误  
11509 GetMarketStatus() 单独处理中金所  
11508 小程序分时和K线增加扩展数据存储  
11506 K线增加扩展数据  
11503 修正GetMultiDayAfterCloseXIndex() 没有判断索引是否有效  
11501 GetMarketStatus() 默认盘中修改为9:10-15:40  
## 1.1.11500（2022-11-05）
11500 小程序RecvStockValue()支持分时图
11498 RecvStockValue()支持分时图
## 1.1.11497（2022-11-03）
11495 PCTooltipPaint 白色配色修改  
11493 MinuteLeftTooltipPaint 支持集合竞价数据  
11492 增加MinuteLeftTooltipPaint  
11490 增加 日持仓量 柱状图  
11488 外部指标图形，支持标题栏输出  
11486 K线指标图形支持外部挂接图形  
11485 CallScriptIndex()增肌传递IsApiPeriod变量  
## 1.1.11464（2022-10-19）
11463 修正PtInFrameY()叠加指标报错  
11461 分钟异动修正横屏模式无法设置颜色  
11460 小程序分时异动支持2.0数据格式  
11456 叠加指标支持UPDOWNDOT  
## 1.1.11451（2022-10-14）
11450 Line Break算法调整  
11449 右键菜单增加"Line Break"  
11448 修正K线美国线不显示涨幅刻度  
11447 小程序叠加K线（收盘价线，美国线） this.ShowRange.FirstOverlayOpen没有赋值  
11445 增加Line break线  
11443 小程序修正 DrawInfoDiv()map长度获取变量写错了  
## 1.1.11443（2022-10-11）
11441 K线切换股票时清空定制计算K线的数据  
11439 右键菜单增加Heikin Ashi  
11438 增加"HeikinAshi"K线   
11436 K线标题栏支持显示Renko信息   
11435 切换指标 renko图重新请求数据  
11434 RenkoCalculate增加ATR动态计算砖块大小  
11433 日线全量数据增加 renko图形  
11432 小程序ChartBand支持API指标对接  
11431 小程序增加越南股市  
11429 ChartDrawSVG 支持tooltip  
## 1.1.11428（2022-09-30）
11427 增加ChartDrawSVG图形  
11426 APIScriptIndex::RecvAPIData() 支持接收数据校验  
11425 分时图，K线图增加接收数据校验功能  
11423 修正 “UPCON”=》“UPCOM”  
11421 修正RecvOverlayHistoryMinuteData()如果叠加股票少数据报错  
11420 1. 分时图增加单数据更新  
      2. 自动更新数据在收盘以后定时器不关闭  
11418 叠加坐标增加是否显示工具栏按钮属性  
## 1.1.11417（2022-09-24）
11416 分时图增加接收多个叠加股票数据接口 RecvMultiOverlayMinuteData  
11415 MULTI_LINE 代码整理  
11414 前端对接API指标支持DRAWBAND  
11408 ChartBand()代码重构  
11406 修正RequestOverlayHistoryMinuteData()报错  
## 1.1.11402（2022-09-21）
11401 ChartScatterPlot::GetTooltipData()倒序遍历  
11400 小程序K线横屏增加PressTime参数  
11399 小程序分时图，K线图增加PressTime参数  
11397 修正ChartScatterPlot::GetMaxMin() 计算错误  
11395 散点图tooltip样式  
11394 k线增加散点图  
11392 分时图增加价格线宽度  
11391 ChartMinutePriceLine 增加线段宽度  
11389 筹码分布按钮支持tooltip  
11387 叠加指标工具栏支持tooltip  
11386 分时图指标工具栏支持tooltip  
11384 指标工具栏按钮增加tooltip提示  
11382 分时图增加十字光标HPenType，VPenType属性  
11380 修正分时图在指标最大化时删除指标窗口错误   
## 1.1.11379（2022-09-10）
11379 小程序K线标题，增加单独设置名字，周期，日期时间的向后间距
## 1.1.11378（2022-09-09）
11378 1. 修正指标标题栏模式，Y轴坐标没有隐藏  
      2. 修正指标标题栏模式，叠加指标没有隐藏  
11374 修正分时图横屏没有设置DayOffset，  
11373 横屏支持指标窗口标题模式  
11372 指标窗口支持只显示指标标题模式  
11371 修正指标图K线最小化时没有隐藏  
11370 分时指标工具栏增加最大最小化按钮  
## 1.1.11369（2022-09-06）
11368 修正DrawDynamicInfo()中DrawToolbar报错  
11366 ChartPictureVolProfileSettingMenu 增加BarPosition参数  
11364 VolProfileVisibleRangeIndex 增加左右柱子配置  

## 1.1.11359（2022-09-04）
11357 区间选择子区域支持拖拽  
11355 增加分时图翻页事件  
11354 分时图增加分页信息  
11352 区间选择子区域居中文字下移一点  
11350 区间选中增加子区域块  
11348 区间选择支持空格重选  
11346 JSCHART_OPERATOR_ID.OP_SET_SELECTRECT 手动设置区间选择支持区间一直存在  
11344 K线日线增加手动设置区间选择范围  
11343 修正 option.Listener 配置失效  
## 1.1.11295（2022-08-06）
11294 修正一字涨停在美国线缩小时不显示  
11293 小程序K线一字涨停缩小以后不显示  
11292 修正一子板缩太小无法显示  
## 1.1.11291（2022-08-05）
11290 画图工具支持再Y轴手动缩放以后绘图  
11288 DBCLICK_KLINE事件增加鼠标位置  
11286 画图是不在可以绘制区域手型改变  
## 1.1.11259（2022-07-21）
11259 小程序横屏分时图支持刻度文字绘制在内部   
11257 修正键盘del删除画图，没有隐藏画图工具配置菜单  
11255 固定范围成交量分布选中菜单修改  
11253 ChartKLine支持外部替换   
11251 修正画布工具选中，没有全刷   
11250 修正画图工具删除没有清空当前选中状态    
11248 固定范围成交量分布图增加黑色配色  
11246 VolProfileVisibleRangeIndex支持参数  
11244 ChartVolProfileVisibleRange增加销毁函数  
11243 迷你分时图增加Y轴刻度显示配置  
11240 分时图数据扩展数据字段  
11239 修改分时图标题信息，隐藏以后，没有触发回调    
## 1.1.11238（2022-07-16）
11238 小程序修正SetStyle() 报错
## 1.1.11237（2022-07-14）
11236 小程序K线Y轴自定义刻度支持绘制再坐标轴框架内部设置  
11235 Y轴自定义支持绘制再坐标轴内部设置  
11234 增加ESC取消画布工具， 不过键盘焦点必须在画布上才可以。  
## 1.1.11221（2022-07-11）
修改说明
## 1.1.11220（2022-07-08）
11219 修正分时图成交量图隐藏时持仓线没有隐藏  
11217 订单流样式1增加POC背景  
11215 可视范围成交量分布图增加Value Arae Volume参数  
11214 可视范围成交量分布指标，增加VAL,VAH刻度线  
11213 订单流样式1，增加横向柱子  
11212 成交量柱子图-可视范围 增加最大值刻度线文字  
11210 成交量柱子图-可视范围支持配置设置  
## 1.1.11195（2022-06-28）
11194 筹码图按钮使用画布自绘  
11193 ChartDrawPriceLineV2 增加显示标题  
11191 K线修正指标窗口最大最小化时，工具栏按钮没有隐藏  
## 1.1.11187（2022-06-24）
11185 修正K线自定义坐标，显示当前屏最后一个数据不显示  
11184 小程序增加叠加股票Y轴自定义刻度  
11183 修正K线横屏百分比坐标Y轴刻度显示错误  
11182 叠加股票Y轴涨幅刻度支持横屏  
11178 自定义Y轴刻度增加当前屏最后一个数据的收盘价刻度  
11176 叠加股票涨幅刻度可以设置  
11175 叠加股票增加Y轴刻度  
11173 ChartKLine单独处理绘图区裁剪  
## 1.1.11172（2022-06-19）
11156 集合竞价盘前，盘后背景独立设置  
11155 叠加指标支持参数修改  
11153 修正DrawMultiDayBeforeOpen错误  
11151 setoption支持设置多日竞价图  
## 1.1.11135（2022-06-10）
11134 增加支持钉钉小程序  
11133 小程序指标计算引擎网络请求使用统一函数  
11132 小程序网络通讯封装  
11130 分时图标题栏显示最有一条数据，新增加格式  
11126 成交量分布图-可视范围 增加指标标题数据显示  
## 1.1.11125（2022-06-06）
11120 ChartStepLine 支持选中，拖拽  
11122 DrawLinePoint()增加判断当前图形是否显示  
11117 叠加指标支持 ChartStepLine  
11116 K线图增加ON_KEYDOWN_SELECT_RECT_FIRST  
11113 增加ON_KEYDOWN_SELECT_RECT_FIRST  
11112 小程序增加 ChartStepLine  
11109 小程序指标标题代码整理  
11108 ChartMultiLine 支持标题输出  
11102 指标引擎增加SETPLINE  
11100 增加阶梯折线  
## 1.1.11070（2022-05-28）
11070 小程序增加DATETIME变量  
11067 订单流样式2，3切换重新请求数据  
11064 增加固定范围成交量分布图  
11061 小程序修正变量名称拼错了 MaxReqeustDataCount=>MaxRequestDataCount  
11060 修正变量名称写错了 MaxReqeustDataCount=>MaxRequestDataCount  
11058 报价列表拖拽支持自动翻页  
## 1.1.11049（2022-05-24）
11047 小程序报价列表完善本地数据排序  
11046 小程序十字光标Y轴文字支持格式设置  
11044 十字光标显示Y轴信息增加格式设置  
## 1.1.11043（2022-05-23）
11043 umychart.regressiontest.wechat 导出改为ESM  
11042 小程序导出使用ESM  
11038 指标图形拖拽默认关闭  
11036 分时图双击事件返回增加当前的分钟数据  
11034 双击事件返回增加选中图形  
11033 报价列表自定义字段回调增加股票信息数据  
## 1.1.10983（2022-05-14）
10983 小程序统一变量this.AutoUpdateTimer初始化为null  
10982 小程序报价列表修正CancelAutoUpdate()调用错误  
## 1.1.10981（2022-05-14）
10979 小程序报价列表名称列增加自动截断<br>
10976 报价列表股票名称增加自动截断功能<br>
10974 小程序报价列表RequestStockSortData()修正回调数据中当前屏索引计算错误<br>
10972 报价列表RequestStockSortData()增加数据个数<br>
10971 报价列表RequestStockSortData()修正索引结束计算错误<br>
## 1.1.10970（2022-05-13）
10970 小程序报价列表SYMBOL_NAME_ID列增加数据为空的显示样式<br>
10968 报价列表SYMBOL_NAME_ID列调整数据为空时显示方式<br>
10967 小程序报价列表增加默认排序和股票缓存数据更新接口<br>
10965 报价列表增加更新缓存数据接口<br>
10964 小程序报价列表支持默认排序设置<br>
10963 报价列表增加默认排序设置<br>
## 1.1.10958（2022-05-12）
10957  修正报价列表手势点击坐标计算错误<br>
10956  小程序报价列表增加ChartDestory()接口<br>
## 1.1.10955（2022-05-11）
10955 修正小程序JSCanvasElement没有包含JSCommonUniApp<br>
10954 小程序报价列表调整表头字体大小<br>
10952 小程序报价列表增加 GetResource()<br>
10951 报价列表增加 SetStyle(), GetResource()<br>
## 1.1.10940（2022-05-10）
10939 报价列表计算表头宽度是增加排序字符宽度<br>
10936 报价列表手势滚动增加页脚信息<br>
10934 报价列表增加翻页循环<br>
      报价列表增加键盘上下移动选中行翻页<br>
## 1.1.10918（2022-05-06）
10917 修正行情报价手势左右或上下拖拽同时存在<br>
10909 报价列表增加支持手势操作<br>
10905 报价列表增加Y偏移函数<br>
10904 报价列表增加排序方式配置<br>
10903 报价列表自定义数值单元格支持颜色设置<br>
## 1.1.10902（2022-05-04）
10902 小程序分时图增加IsDrawTitleBG属性
10901 分时图增加IsDrawTitleBG属性
## 1.1.10883（2022-04-30）
10866 小程序分时图支持远程指标
10870 增加报价列表
## 1.1.10860（2022-04-27）
10859 小程序K线面积图填充左侧间隙<br>
10858 K线面积图把最左边的空隙补上<br>
## 1.1.10848（2022-04-25）
10847 修正手机页面画图工具绘制时会触发K线左右移动
## 1.1.10845（2022-04-25）
10843 成交明细增加自定义字段<br>
10839 修正画图工具黄金分割线横屏显示错误<br>
10838 分笔明细增量数据回调增加最后一个分笔数据信息<br>

## 1.1.10819（2022-04-18）
10819 小程序 MAX(), MIN() 支持多个变量比较<br>
10818 小程序 JSAlgorithm::Add(), JSAlgorithm::Subtract(), JSAlgorithm:: Multip() 修正判断数字逻辑错误<br>
10816 小程序增加日本股票市场<br>
10815 增加日本股票市场.JP<br>
## 1.1.10813（2022-04-17）
10812 小程序 MinuteTimeStringData::GetSHSZ(), MinuteTimeStringData::GetHK() 增加股票代码参数<br>
10811 MinuteTimeStringData::GetHK(), MinuteTimeStringData::GetTW() 增加股票代码参数<br>
10810 小程序增加台湾股票市场<br>
10809 OnSize()函数增加是否重新计算分割线位置属性<br>
10808 增加台湾股票<br>
## 1.1.10807（2022-04-12）
10805 小程序 ON_BIND_DRAWTEXT改成ON_BIND_DRAWICON
## 1.1.10804（2022-04-07）
10795 切换股票和周期增加图形销毁函数<br>
10796 切换指标增加图形销毁事件<br>
10797 ChartMultiHtmlDom增加销毁标识<br>
10799 小程序增加指标图形销毁事件<br>
10800 小程序增加DRAWICON外部绘图绑定事件<br>
10801 小程序分时图增加ON_PHONE_TOUCH事件支持<br>
10802 小程序修正分时图ON_PHONE_TOUCH事件没有更新x,y坐标。<br>
10803 增加ON_BIND_DRAWTEXT事件<br>
## 1.1.10794（2022-04-04）
10792 小程序setoption设置border独立成一个函数<br>
10791 setoption设置border独立方法<br>
10790 setoption设置AutoLeft和AutoRight使用深拷贝<br>
10787 分时图切换股票或天数的时候增加清空原有指标图形<br>
## 1.1.10785（2022-03-27）
10784 K线图增加键盘Ctrl+(left/right)移动十字光标<br>
10781 修正新版DRAWNUMBER读取配置错误<br>
10780 小程序DRAWTEXT, DRAWNUMBER函数重构，增加支持CKLINE<br>
10778 重构DRAWNUMBER函数，支持BACKGROUND,CKLINE。<br>
10776 DRAWTEXT增加连线功能<br>
## 1.1.10774（2022-03-22）
1.1.10774
## 1.1.10773（2022-03-22）
10773 小程序增加K线倒计时接口<br>
10772 K线倒计时支持框架内坐标<br>
10770 增加K线最新数据倒计时时间接口<br>
10767 增加EMA指标<br>
10766 增加EMA3， EMA4， EMA5，EMA6指标<br>
10765 小程序EMA周期支持数组<br>
10764 EMA周期为0是，返回无效数<br>
## 1.1.10763（2022-03-19）
10762 画图工具生成key独立成一个函数<br>
10761 小程序日K图X轴如果只有1个刻度显示YYYYY-MM格式<br>
10760 日K线图X轴如果只有1个刻度显示YYYY-MM格式<br>
## 1.1.10759（2022-03-17）
10758 小程序增加动态修改语言函数SetLanguage()<br>
10757 SetLanguage() 修正没有修改tooltip<br>
10756 设置多语言接口修改<br>
## 1.1.10755（2022-03-14）
10754 小程序分时图setoption增加IsShowXLine，IsShowYLine属性设置<br>
10753 分时图setoption增加 IsShowXLine， IsShowYLine 设置<br>
10752 增加画图工具加载事件<br>
## 1.1.10751（2022-03-11）
10750 分时图标题成家量成交金额支持多语言<br>
10749 小程序修正K线图标题栏成交量和成交金额不支持多语言<br>
10747 分时图显示最新数据支持集合竞价数据<br>
## 1.1.10746（2022-03-11）
10746 小程序增加指标标题字体设置<br>
10744 画图工具增加是否保存到本地变量<br>
10743 小程序 K线横屏增加拖拽历史数据下载功能<br>
10742 增加设置分时图指标标题字体功能<br>
10741 分时图初始化天数<=0， 绘制空图<br>
## 1.1.10740（2022-03-09）
10740 修正小程序不支持DRAWICON函数，绘制SVG图标。转成文字符号<br>
10738 DRAWICON()函数返回增加图标ID<br>
## 1.1.10737（2022-03-09）
10376 叠加指标支持K线背景色设置<br>
10375 小程序 umychart.index.wechat.js 增加引入 ChartData, SingleData类<br>
## 1.1.10734（2022-03-09）
10732 修正ChartSingleText计算字体高度时覆盖了原来的字体<br>
10731 小程序NetworkFilter增加AnnouncementInfo::RequestData<br>
## 1.1.10730（2022-03-05）
10729 K线横屏支持ON_PHONE_TOUCH事件<br>
10728 小程序K线横屏支持ON_PHONE_TOUCH事件<br>
## 1.1.10727（2022-03-01）
10727 小程序叠加日线数据支持拖拽下载历史数据<br>
10725 h5增加叠加分钟K线历史数据拖拽下载<br>
10724 h5增加叠加日线数据拖拽下载数据<br>
## 1.1.1073（2022-02-28）
10723 修正小程序K线标题字体间隔计算错误
## 1.1.10722（2022-02-28）
10720 小程序增加申明文字<br>
10719 增加申明文字<br>
## 1.1.10718（2022-02-23）
10717 小程序修正BACKGROUND再DRAWTEXT数组字符串中无效<br>
10714 修正涂鸦线段菜单绑定错误<br>
## 1.1.10713（2022-02-23）
10712 小程序增加BACKGROUND函数<br>
10711 增加BACKGROUND()函数，跟函数DRAWTEXT同时使用<br>
## 1.1.10710（2022-02-20）
增加K线训练demo
10710 JSUniAppCanvasHelper.MeasureText() 增加空格宽度<br>
10708 K线训练增加自动调整左右边框间距<br>
## 1.1.10707（2022-02-19）
10706 KLineTrainSimpleChartContainer中RightSpaceCount强制设置为0<br>
10705 小程序增加 “简单K线训练”<br>
10704 小程序去掉"简单图形"，'雷达图'，"饼图"， '地图'。 只做K线，通用图形不做<br>
10703 增加 KLineTrainSimpleChartContainer<br>
10701 小程序X，Y轴分割线支持样式自定义<br>
## 1.1.10697（2022-02-14）
10697 小程序K线支持阴线阳新都为空心柱<br>
10695 右键菜单K线类型增加空心阳线阴线<br>
10693 K图支持完全空心K线柱<br>
## 1.1.10692（2022-02-08）
10691 小程序 WINNER, COST价格支持范围调整为0-5000<br>
10690 WINNER价格支持范围调整到0-5000<br>
10688 分钟K线更新，流通股使用上一条记录的<br>
10686 流通股本初始化为null<br>
## 1.1.10678（2022-02-04）
10677 小程序 ChartData::GetVol(unit)增加参数unit
## 1.1.10676（2022-01-31）
2021年最后一个升级包. 新年快乐<br>

ver 10676
10676 小程序JsonDataToFinance()修正变量拼写错误<br>
10674 FrameSplitMinuteX 修正多日背景区域索引计算错误<br>
## 1.1.10673（2022-01-28）
10673 小程序MA，SUM周期参数支持数组<br>
10671 FrameSplitMinuteX 修正X轴文字背景区域最新一天索引错误<br>
10669 多日分时图增加X轴背景颜色设置<br>

## 1.1.10660（2022-01-23）
10657 ChartOX支持tooltip提示信息<br>
10660 小程序修正ChartStickLine宽度小于<1时无法显示<br>
## 1.1.10646（2022-01-21）
修正HQChartControl插件， 增加风格接口及K线类型切换接口
## 1.1.10645（2022-01-19）
10645 小程序增加ON_DRAW_KLINE_LAST_POINT事件<br>
10643 分时图支持集合竞价区域键盘移动十字光标<br>
## 1.1.10642（2022-01-12）
10642 小程序增加AddScriptIndexWindow(), AddAPIIndexWindow()<br>
10640 增加AddAPIIndexWindow<br>
## 1.1.10639（2022-01-10）
10639 小程序指标脚本支持$
## 1.1.10638（2022-01-08）
10638 小程序修正KLineFrame::ZoomUp(), KLineFrame::ZoomDown() 没有处理数据偏移为负数的情况
## 1.1.10637（2022-01-08）
10637 小程序增加函数
PWINNER（暂时空的，拿不到算法）
BETWEEN，CONST，CEILING，FLOOR，TOPRANGE，LOWRANGE，FINDLOW，FINDLOWBARS，FINDHIGH，FINDHIGHBARS，BARSNEXT，HOD，LOD，AMA，TMA，ROUND，ROUND2，TRMA，VALUEWHEN，HARMEAN，DATETODAY，DAYTODATE
## 1.1.10636（2022-01-06）
10636 小程序 ScriptIndex::GetColor() 修正颜色转换错误
## 1.1.10635（2021-12-31）
10635 小程序修正指标标题信息过长超过K线区域<br>
10633 KLineChartContainer::UpdateOverlayMinuteRealtimeData() 支持v2.0数据结构更新<br>
## 1.1.10630（2021-12-28）
10629 小程序K线，分时图标题栏增加字段间距宽度设置<br>
10628 修正KLineTrainChartContainer::RecvFlowCapitalData() 读取流通股本报错<br>
10627 JSUniAppCanvasHelper.MeasureText() 增加':'单独调整宽度<br>
## 1.1.10626（2021-12-25）
小程序umychart.wechat.3.0.js文件大小减少到500K一下<br>
<br>

10625 小程序KLineChartContainer::UpdateMainData()修正历史数据为空，更新数据大于一屏数据时，没有移动到最新数据<br>
10624 KLineChartContainer::UpdateMainData()修正历史数据为空，更新数据大于一屏数据时，没有移动到最新数据<br>
10623 迁移APIScriptIndex类到umychart.index.wechat.js<br>
10622 迁移ChartStraightLine类到umychart.chartpaint.wechat.js<br>
10621 迁移ChartLineMultiData类到umychart.chartpaint.wechat.js<br>
10620 迁移ChartOverlayMinutePriceLine到umychart.chartpaint.wechat.js<br>
## 1.1.10608（2021-12-22）
10604 秒周期支持拖拽下载数据
10606 小程序 KLineChartContainer::DragDownloadData() 支持秒周期下载
## 1.1.10594（2021-12-09）
10594 修正使用K线UI数据指标计算异常
## 1.1.10592（2021-12-08）
修正h5页面OnKLinePageChange 报错
## 1.1.10550（2021-12-08）
10590 小程序 DRAWBAND支持横屏<br>
10587 增加K线缩放拖拽以后触发指标计算配置<br>
10585 增加画布工具点搜否始终显示选项<br>
10583 画图工具选中点支持方框模式<br>
10582 内置画图工具设置菜单支持rgb颜色<br>

## 1.1.10579（2021-11-30）
10578 小程序增加深证交易所股票期权 .SZO<br>
10577 小程序 DRAWICON支持FONTSIZE参数<br>
10576 DRAWICON 支持 FONTSIZE参数<br>
10574 增加 深证股票期权<br>
## 1.1.10573（2021-11-29）
10572 分时图支持选中画图图形显示X，Y轴坐标信息<br>
10570 修正DrawDrawPictureXCoordinate() 变量未定义报错<br>
10568 画图工具选中增加X，Y轴坐标信息<br>
10566 小程序增加TFILTER<br>
10565 修改TFILTER算法<br>
10552 小程序 JSChart.SetUSATimeType()<br>
## 1.1.10551（2021-11-18）
10550 小程序深度图支持多语言<br>
10549 深度图支持多语言 <br>
## 1.1.10548（2021-11-18）
10547 修正K线切换周期和复权没有清空已有的指标
## 1.1.10544（2021-11-18）
10543 小程序深度图增加数据下载提示信息设置
## 1.1.10541（2021-11-17）
10541 小程序深度图增加X轴个数设置 <br>
## 1.1.10538（2021-11-17）
10537 小程序增加北交所市场<br>
10535 1. 增加北交所后缀 BJ<br>
      2. Y轴刻度文字增加间距配置项<br>
10533 小程序增加Y轴刻度文字和边框的间距配置<br>
## 1.1.10532（2021-11-12）
10530 ChartKLine::DrawKBar_Unchagne()修正影线不居中<br>
10529 小程序ChartKLine::DrawKBar_Unchagne() 修正影线上下不居中<br>
## 1.1.10528（2021-11-11）
10528 小程序修正K线影线不居中的问题<br>
10526 修正空心K线影线不居中<br>
10522 修改K线缩放默认配置比例数组<br>
10520 ChartKLine::DrawOrderFlow() 单独处理K线柱子<4的情况<br>
10513 增加新建自定义指标窗口接口 AddScriptIndexWindow<br>
10511 修正KLineChartContainer::CreateSubFrameItem()没有设置周期和股票代码<br>
10509 ON_PHONE_TOUCH 支持分时图<br>
## 1.1.10493（2021-11-02）
10490 JSSymbolData 支持后台周期<br>
10482 K线数据请求回调增加周期和复权变量<br>
10477 KLINE_BG 背景图支持穿区间方位<br>
10475 注册了区间选择事件，默认就禁止内置的区间选择框弹出<br>
10472 分时图增加AutoUpdateEvent() 事件函数<br>
## 1.1.10468.1（2021-10-27）
HQChartControl.Vue插件增加复权函数
## 1.1.10468（2021-10-22）
10467 增加空函数DepthChartCorssCursor::PtInButton()
## 1.1.10465（2021-10-22）
10465 小程序优化请求最新版本号逻辑<br>
10463 请求版本号逻辑优化<br>
## 1.1.10395（2021-10-11）
10394 小程序修正K线最新价格刻度线切换周期后无效<br>
10393 KLineChartContainer::RecvRealtimeData()代码整理<br>
10392 小程序增加复权因子<br>
## 1.1.10391（2021-10-09）
10390 小程序增加繁体文字<br>
10289 修正ChartData::GetRightData()使用复权系数报错<br>
10388 文字本地化增加繁體TC<br>
10385 KLineChartContainer::ClearCustomKLine() 增加是否重绘标识<br>
## 1.1.10384（2021-10-01）
10383 增加清空自定义K线颜色接口<br>
10382 小程序增加清空自定义K线接口KLineChartContainer::ClearCustomKLine()<br>
10381 小程序增加自定义单个K线颜色接口<br>
10379 小程序 HHV，LLV增加小于周期的数值计算<br>
10378 HHV,LLV增加处理不不满足周期数据处理<br>
## 1.1.10370（2021-09-23）
10369 修正ChartBorder::GetBorder()  ChartBorder::GetHScreenBorder() 图形宽度高度变量错误<br>
      小程序指标标题支持JSCHART_EVENT_ID.ON_INDEXTITLE_DRAW事件<br>
10368 小程序修正FINDSTR()函数<br>
10367 FINDSTR()函数修正<br>
10366 小程序增加函数FINDSTR<br>
10364 增加函数 FINDSTR<br>
10363 K线图鼠标移动到X轴变左右箭头<br>
## 1.1.10362（2021-09-19）
10361 ON_DRAW_KLINE_LAST_POINT事件代码整理
10360 叠加指标支持动态标题
10357 增加X轴拖拽缩放K线
10355 OnMouseMove() 增加鼠标离开画布不显示十字光标
## 1.1.10354（2021-09-16）
10353 十字光标按钮支持iconfont<br>
10348 增加十字光标点击按钮事件<br>
10347 分时图最新价格刻度支持时间输出<br>
10344 小程序修正STD, STDP算法<br>
10343 修正算法STD, STDP<br>
10342 K线图过场动画不调整左右边框间距<br>
## 1.1.10333（2021-09-13）
10332 叠加指标支持VERTLINE，HORLINE<br>
10330 增加叠加指标移动到新窗口，MoveOverlayIndexToNewWindow<br>
10328 K线图支持 IsFixXLastTime<br>
10326 APIScriptIndex派生CopyTo虚函数<br>
10325 增加叠加指标移动<br>
10324 小程序MULTI_LINE 支持设置线段宽度<br>
10322 ChartMultiLine 支持设置线段宽度<br>
## 1.1.10321（2021-09-09）
10320 AddIndexWindow()修正OverlayIndexType参数位置写错了<br>
10318 单行显示指标标题支持横屏<br>
10316 1. 修正IChartFramePainting::ClearCoordinateText()没有判断Message字段是否有效<br>
      2. 修正HQTradeFrame::Draw()在动画场景时不自动调整左右边框间距<br>
10315 叠加指标标题支持单行显示<br>
## 1.1.10309（2021-09-01）
10309 小程序修正分时图ChartStickLine柱子太粗了。
## 1.1.10306（2021-08-31）
10305 修正uniapp分时图指标工具栏$报错<br>
10302 修正OnTouchDBClick()手势坐标没有转换到K线图相对坐标<br>

## 1.1.10301 （2021-08-27）
增加用户协议<br>
10285 修正DrawInsideHorizontal，DrawCustomHorizontal没有处理最小化窗口指标<br>
10284 小程序增加双击副图缩放指标窗口<br>

## 1.1.10283（2021-08-22）
10282 小程序JSChartContainer::FullDraw()数据加载去掉坐标文字<br>
10281 显示数据加载时， 不显示刻度文字<br>
10276 增加手势双击缩放附图指标窗口<br>
10274 画图工具支持附图窗口最小化<br>
10273 部分图形画法支持指标窗口隐藏模式<br>
10271 修正右边自动调整叠加指标宽度是没有动态计算叠加刻度<br>
10270 增加是否启动双击缩放附图窗口配置<br>
10269 增加子窗口双击缩放<br>

## 1.1.10265（2021-08-17）
10264 修正KLineChartContainer::Update()没有更新Y轴坐标分割线数据<br>
10263 DrawCustomItem() 支持多行自定义刻度文字<br>
## 1.1.10251（2021-08-12）
10250 小程序指标翻译器函数翻译代码整理<br>
10249 指标解释器函数解释代码整理<br>
10247 小程序指标翻译器增加部分字符串函数翻译<br>
10245 指标翻译器增加部分字符串函数翻译<br>
10241 ON_TITLE_DRAW事件增加叠加股票信息<br>
## 1.1.10238（2021-08-09）
10237 h5修正左右边框间距自动调整没有考虑筹码图宽度<br>
10235 h5K线图边框间距自适应支持横屏<br>
10234 小程序自动调整左右边框距离支持横屏<br>
10233 小程序K线图支持左右边框间距根据刻度文字自动调整<br>
10230 修正拖拽指标边框触发区间选择<br>
10227 h5K线图增加左右两侧边框间距根据刻度自动调整<br>
## 1.1.110226（2021-08-09）
10225 小程序修正指标翻译是LLVBARS,HHVBARS报错<br>
10223 K线增加复权因子读取.<br>
10222 指标翻译器修正HHVBARS, LLVBARS报错<br>
10221 增加复权使用复权因子算法<br>
## 1.1.110220（2021-08-05）
10219 修正 ChartMinutePriceLine::GetTooltipData()报错<br>
10217 h5信息地雷数据支持修改域名<br>
## 1.1.110216（2021-08-04）
10216 小程序修正百分比坐标Y轴超出刻度范围<br>
10214 修正K线百分比坐标超出当前Y轴范围<br>
10212 修正分笔图十字光标区域背景最右边溢出<br>
10210 分笔图增加区间背景<br>
10209 JsonDataToTickData() 每个分笔数据的前收盘使用当日的前收盘<br>
10208 分笔图支持tooltip提示信息<br>
## 1.1.110189（2021-07-27）
10189 修正小程序MinuteFrame里的成员变量DataWidth, DistanceWidth 没有设置为1<br>
10188 OnDoubleClick() 代码整理<br>
10187 小程序CallFunctionExplain() 增加函数不存在报错<br>
10185 CallFunctionExplain()增加函数不存在报错<br>
10183 十字光标竖线支持连续<br>
10182 K线tooltip和K线信息地雷禁止选中<br>
10181 判断tooltip代码整理， 独立成2个函数 PtInChartPaintTooltip，PtInOverlayChartPaintTooltip<br>
10179 ChartOverlayMinutePriceLine, ChartMinutePriceLine 增加函数GetTooltipData()<br>
10178 OnMinuteSelectRectMouseUp()增加CLICK事件通知<br>
## 1.1.110177（2021-07-23）
10174 K线左右拖拽数据增加自动模式 (StepPixel=0)
## 1.1.110173（2021-07-22）
10172 自定义K线支持横屏<br>
10171 小程序K线图最大最小显示配置支持横屏<br>
10170 K线最大最小值显示设置支持横屏<br>
10169 K线图支持自定义K线颜色<br>
10167 ChartKLine::DrawKBar()代码整理<br>
## 1.1.110166（2021-07-19）
10165 GetVariantData()增加错误提示<br>
10161 修正GetVariantData()外部数据对接格式错误<br>
10159 小程序增加INBLOCK<br>
10157 增加INBLOCK<br>
10156 小程序支持板块函数<br>
10154 增加板块函数<br>

## 1.1.110127（2021-07-14）
10125 K线图增加叠加指标参数修改更新接口<br>
10124 去掉scss相关内容和webpack配置<br>
10122 修正分时图区间选择最后的结束时间点超出当前交易时间报错 <br>


## 1.1.110119 （2021-07-12）
10117 JSExplainer语法检测器迁移到小程序<br>
10115 小程序AddIndexWindow()增加SplitCount,IsShowLeftText,IsShowRightText属性设置<br>
10114 AddIndexWindow() 增加SplitCount属性<br>
10110 增加区间统计框关闭以后, 操作选中区域完毕以后,弹出对应的菜单或框<br>
## 1.1.10095（2021-07-07）
10094 ChangeIndexWindowCount() 增加IsShowLeftText, IsShowRightText设置<br>
10092 AddIndexWindow() 增加IsShowLeftText,IsShowRightText设置<br>
10090 修正多日分时图切换最大最小值没有清空 <br>

## 1.1.10087（2021-07-01）
10087 小程序修正分时图RecvMinuteData()报错
## 1.1.10086（2021-07-01）
10086 小程序国内期货增加新品种<br>
10085 小程序DynamicTitleData增加是否显示标识<br>
10084 小程序修正IFrameSplitOperator.IsString()空字符串判断错误<br>
10083 IFrameSplitOperator.IsString()修正""空字符串判断错误<br>
10081 MULTI_BAR叠加指标增加往标题实例中设置数据<br>
10080 自定义多柱子增加数据设置到标题<br>
## 1.1.10076（2021-06-29）
10074 小程序分时图Y轴增加涨跌停坐标轴<br>
10073 小程序 分时图Y周支持根据最高最低加分割<br>
10072 1. 小程序 IChangeStringFormat 迁移到umychart.framesplit.wechart.js中<br>
      2. 小程序 增加IChangeStringFormat工厂类<br>
10068 K线tooltip和标题信息成交量A股统一改成手单位<br>
## 1.1.10065（2021-06-28）
10064 修正分时图没有判断是否支持区间选择导致报错
## 1.1.10063（2021-06-28）
10061 小程序十字光标X轴日期文字支持3种格式 0=YYYY-MM-DD 1=YYYY/MM/DD  2=YYYY/MM/DD/W 3=DD/MM/YYYY<br>
10060 十字光标X轴日期显示 支持YY/MM/YYYY<br>
10057 修正百分比坐标价格和百分比两个颜色配置颠倒了.<br>
10055 修正分笔K线区间统计框起始时间格式显示不对.<br>
## 1.1.10040（2021-06-25）
10039 K线图支持上下拖拽<br>
10037 分笔K线增加支持叠加指标<br>
10035 分笔K线数据更新增加2.0格式<br>
10034 1. 分笔K线全量数据增加新的数据格式<br>
      2. 分笔标题信息和tooltip显示样式修改<br>
      3. 分笔增加百分比坐标<br>

## 1.1.9984（2021-06-17）
9983 修正SplitLogarithmicXYCoordinate()预留高度为负数是,显示错误<br>
9978 修正KLineChartContainer::ChangeIndexWindowCount() 显示错位<br>
     增加AddIndexWindow() 添加指标窗口<br>
9977 K线图增加事件ON_SPLIT_XCOORDINATE<br>
9958 KLineChartContainer.JsonDataToHistoryData(), KLineChartContainer.JsonDataToMinuteRealtimeData(), KLineChartContainer.JsonDataToMinuteHistoryData() 去掉价格<0的无效价格判断.<br>
9954 ChartVericaltLine, ChartHorizontalLine 支持横屏<br>
9953 绘图函数HORLINE()支持单数值条件<br>
9951 增加绘图函数HORLINE<br>
9950 增加绘图函数VERTLINE<br>
9949 部分替换 for(var i in array ) 改成 for(var i=0;i<array.length;++i)<br>
## 1.1.9948（2021-06-12）
9948 小程序分时图和K线图十字光标移动优化<br>
9947 小程序增加分时图十字光标移动延迟绘图间隔设置<br>
## 1.1.9946（2021-06-12）
9946 小程序优化分时图十字光标移动效率<br>
9945 小程序修正ChangePeriod()未完成数据下载切换周期报错<br>
9942 小程序ChartMinutePriceLine迁移到umychart.chartpaint.wechart.js中<br>
## 1.1.9938（2021-06-10）
9937 小程序K线训练增加是否显示最高最低价格显示控制<br>
9936, 9935 把部分数组循环遍历 (var i in array) 改成=> (var i=0;i<array.length;++i)<br>
## 1.1.9933（2021-06-09）
9931 小程序更新定时器增加判断是否图形已销毁<br>
9925 期货增加 郑州商品交易所-红枣(CJ)<br>
9921 JsonDataToMinuteDataArray 修正跨天数据 日期时间显示错误<br>
9919 修正分时图标题高度没有设置为0<br>
9917 大盘指数(INDEXA, INDEXC....)支持对3放数据对接<br>
## 1.1.9907（2021-06-06）
9907 修正IFrameSplitOperator::IntegerCoordinateSplit() 负数最小值计算错误<br>
9902 增加指标标题绘制回调函数 ON_INDEXTITLE_DRAW<br>
## 1.1.9901（2021-06-06）
9900 小程序修正IFrameSplitOperator::IntegerCoordinateSplit()最低价计算错误 <br>
9899 IFrameSplitOperator::IntegerCoordinateSplit() 修正最低价计算错误 <br>
## 1.1.9893（2021-06-04）
9892 小程序IFrameSplitOperator::IntegerCoordinateSplit()算法优化<br>
9890 IFrameSplitOperator::IntegerCoordinateSplit() 修正计算错误<br>
9886 增加多日集合竞价最新数据更新<br>
9885 修正FrameSplitY::GetCallAcutionSplitY() 多日分时Y轴多算了一个刻度<br>
     多日分时图集合竞价Y轴统一最大,最小值<br>
## 1.1.9864（2021-05-30）
9863 分时图集合竞价十字光标显示最近的有效数据<br>
9862 多日集合竞价十字光标支持Y轴数据显示<br>
9861 多日分时图Y轴显示集合竞价刻度<br>
## 1.1.9792（2021-05-21）
9792 小程序  <br>
1. 修正DRAWRECTREL()位置正确性没有判断<br>
2. Y轴内部刻度增加属性YTextBaseline,支持上下位置可以配置<br>
9790 FrameSplitMinutePriceY::GetMaxMin() 修正计算错误. Y轴内部刻度文字支持上下位子配置<br>
9788 导出 CoordinateInfo <br>

## 1.1.9759（2021-05-19）
9758 DynamicMinuteTitlePainting调整集合竞价1.0数据格式显示样式<br>
9756 小程序 ChartVolStick柱子高度<1,统一显示为1 <br>
9754 ChartVolStick() 高度小于1, 统一调整为1 <br>
9748 ShowSelectRect() 分时图显示位置调整<br>
9747 分时图增加区间选择接口<br>
9746 RequestDragMinuteData, RequestDragDayData 数据回调增加周期和复权参数<br>
9743 集合竞价支持绘制点 <br>


## 1.1.9725（2021-05-15）
9724 修正ChartMultiHtmlDom() 在页面放大倍数以后, DOM坐标计算错误 <br>
9719 小程序 JSComplier.Execute() 去掉ios回报错的日志 <br>
## 1.1.9694（2021-05-10）
9694 小程序 1. JSCHART_EVENT_ID定义迁移到umychart.data.wechart.js里面 <br>
      2. 支持 JSCHART_EVENT_ID.ON_SPLIT_YCOORDINATE 事件 <br>
9687 小程序ChartBorder增加 GetBorder(),GetHScreenBorder() <br>
## 1.1.9683（2021-05-09）
修改readme
## 1.1.9682（2021-05-09）
修改readme
## 1.1.9681（2021-05-09）
9671 增加分时图集合竞价关闭按钮<br>
9670 分时图集合竞价支持横屏<br>
9668 增加收盘集合竞价<br>
## 1.1.9654（2021-05-04）
9653 1.分时图双击事件 <br>
     2.集合竞价宽度设置 <br>
9651 修正ChartMinutePriceLine::DrawBeforeOpen()报错 <br>
9649 MULTI_LINE多线段支持"C","H"等特殊标识价格 <br>
9648 1.修正分时图叠加指标共享Y轴横屏没有读取主图Y轴信息 <br>
     2.ChartMultiSVGIcon 使用GetBorder获取坐标信息 <br>
9647 分时图集合竞价框架重新调整 <br>
## 1.1.9617（2021-04-28）
9616 修正IsSHSZStockA() 没有包含300创业板<br>
9610 UpdateFrameMaxMin()  主图计算Y轴最大最小值增加叠加指标数据 <br>
9604 分时图和K线主图支持ON_SPLIT_YCOORDINATE事件 <br>
9599 Y轴分割函数，增加是否支持Y轴缩放查询接口 <br>
9597 增加 Y轴分割刻度回调事件 <br>


## 1.1.9536（2021-04-23）
增加插件教程说明
## 1.1.9535（2021-04-22）
增加HQChart模板样例
## 1.1.9534（2021-04-22）
9532 公告信息地雷支持去重更新 <br>
9529 信息地理拖拽下载数据以后,支持更新调用 <br>
9520 增加AB波浪尺 <br>
## 1.1.9518（2021-04-21）
9517 修正多日分时图更新当天数据时,叠加指标没有重新计算 <br>
9516 小程序增加ON_PHONE_TOUCH事件回调 <br>
9509 修正OverlayScriptIndex::CreateTextLine()画法保存错误 <br>
9501 1. 信息地雷顶部画不下了, 移动下面画<br>
     2. 修正单击K线和双击K线同时触发回调的问题<br>

## 1.1.9500（2021-04-19）
9481 增加画图工具图标<br>
9479 小程序修正BARSSINCEN算法错误<br>
9478 修正BARSSINCEN算法<br>
9477 修正 JSCHART_OPERATOR_ID.OP_LEFT_ZOOM_OUT 数据索引计算错误<br>
9497 走势图支持后台指标API数据<br>
9496 修正"BindOverlayPositionData", "ClearBindOverlayPositionData" 指标变量写错了.<br>
9495 分时图支持叠加指标<br>
9499 h5增加手势事件回调ON_PHONE_TOUCH. <br>

## 1.1.9473（2021-04-12）
9472 修正K线数据更新以后叠加指标没有执行更新<br>
9471 小程序"CIRCLEDOT","POINTDOT"点半径支持设置<br>
9469 CIRCLEDOT, POINTDOT支持半径大小设置<br>
9466 小程序ChartOperator右移K线支持下载功能<br>
9465 小程序COLORSTICK支持标题字体颜色设置<br>
9469 COLORSTICK 支持后面增加颜色控制标题的字体颜色<br>
9462 增加点击回调事件<br>
9458 ChartOperator() 数据右移增加，历史数据下载功能<br>
## 1.1.9444（2021-04-08）
9443 增加K线叠加指标是否显示指标名字配置
9441 ChangeIndexTemplate() 支持指标标题字体设置
9338 ChartSingleText 获取X轴坐标分时图和K线图分开

## 1.1.9417（2021-04-01）
9416 增加水平线段
## 1.1.9416（2021-03-31）
增加测试用例项目
## 1.1.9415（2021-03-31）
把原来hqchart改成uniapp插件模式. 版本号 1.9415
