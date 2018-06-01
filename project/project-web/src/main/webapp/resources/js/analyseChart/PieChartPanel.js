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
                    text: '年度经费使用情况',

                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['交通费用', '工程费用', '人事费用', '行政费用', '财务费用']
                },
                series: [
                    {
                        name: '使用情况',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '交通费用'},
                            {value: 310, name: '工程费用'},
                            {value: 234, name: '人事费用'},
                            {value: 135, name: '行政费用'},
                            {value: 1548, name: '财务费用'}
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