Ext.ns('Ext.project');
Ext.project.PieChartPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    constructor : function(config) {
        if (config == null) {
            config = {};
        }
        Ext.apply(this, config);
        // 每页显示10条
        this.pageSize = 10;
        // 增删改查方法路径
        this.Url = {
            queryUrl: 'project/Schedule/queryListForPage',
            insertUrl: 'project/Schedule/insert',
            updateUrl: 'project/Schedule/update',
            deleteUrl: 'project/Schedule/delete'
        },
            this.option = {
                title: {
                    text: '2018年度经费使用情况',

                    x: 'right'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['铁道供电技术费用', '城市轨道交通运营管理费用', '铁道通信与信息化技术费用', '机械制造与自动化费用', '城市轨道交通车辆技术费用',"商务英语","数控技术"]
                },
                series: [
                    {
                        name: '使用情况',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 33.5, name: '铁道供电技术费用'},
                            {value: 31.0, name: '城市轨道交通运营管理费用'},
                            {value: 23.4, name: '铁道通信与信息化技术费用'},
                            {value: 13.5, name: '机械制造与自动化费用'},
                            {value: 154.8, name: '城市轨道交通车辆技术费用'},
                            {value: 15.8, name: '商务英语'},
                            {value: 114, name: '数控技术'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.PieChartPanel.superclass.constructor.call(this, {
            title : '年度经费使用情况',
            layout: 'fit',
            items: [this.grid]
        })
    }
});