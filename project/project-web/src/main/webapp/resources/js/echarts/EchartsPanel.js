Ext.ns('Ext.loanStatistics');
Ext.loanStatistics.EchartsPanel = Ext.extend(Ext.BoxComponent ,{
    option: null,
    border: true,
    //修改/刷新数据
    modifyOption: function(option){
        var me = this;
        me.option = option;
        me.echarts.clear();
        me.echeartOption(me);
    },
    //初始化box组件
    initComponent:function() {
        var me = this;
        me.on("resize", function (me, mewidth, meheight) {
            me.getEl().dom.style.height = meheight + 'px';
            me.echarts = echarts.init(me.getEl().dom);
            me.echeartOption(me);
        });
    },
    //初始化echarts图表
    echeartOption: function(me){
        me.echarts.setOption(me.option);
    }
});