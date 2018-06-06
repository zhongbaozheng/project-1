Ext.ns('Ext.project');
Ext.project.ColumnChartPanel = Ext.extend(Ext.Panel, {
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

            this.series = [
            {
                name:'2018',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 70, 85]
            },
            {
                name:'2019',
                type:'bar',
                barWidth: '60%',
                data:[40, 62, 50, 85]
            },
            {
                name:'2020',
                type:'bar',
                barWidth: '60%',
                data:[100, 72, 50, 85]
            },
            {
                name:'2021',
                type:'bar',
                barWidth: '60%',
                data:[90, 42, 30, 55]
            },
            {
                name:'2022',
                type:'bar',
                barWidth: '60%',
                data:[60, 52, 90, 65]
            }
        ],
            this.option = {
                color: ['#3398DB','#003366', '#006699', '#4cabce', '#e5323e'],
                series:this.series,
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:function (params) {
                        // console.log(params);
                        console.log(params[0].seriesName);
                        if(params[0].seriesName=="2018"){
                            console.log("????")
                            return params[0].seriesName +" <br/>"+params[0].name+" 完成数："+params[0].data+"<br/>进度："+params[0].data/(10+52+70+85)*100+"%";
                        }

                        if(params[0].seriesName=="2019"){
                            return params[0].seriesName +" <br/>"+params[0].name+" 完成数："+params[0].data+"<br/>进度："+params[0].data/(40+62+50+85)*100+"%";
                        }
                        if(params[0].seriesName=="2020"){
                            return params[0].seriesName +" <br/>"+params[0].name+" 完成数："+params[0].data+"<br/>进度："+params[0].data/(100+72+50+85)*100+"%";
                        }
                        if(params[0].seriesName=="2021"){
                            return params[0].seriesName +"<br/>"+params[0].name+" 完成数："+params[0].data+"<br/>进度："+params[0].data/(90+42+30+55)*100+"%";
                        }
                        if(params[0].seriesName=="2022"){
                            return params[0].seriesName +" <br/>"+params[0].name+" 完成数："+params[0].data+"<br/>进度："+params[0].data/(60+52+90+55)*100+"%";
                        }
                        // console.log(this.series);
                        // for(var i=0;i<this.series.length;i++){
                        //     if(this.options.series[i].name == params.name){
                        //         return params+":"+this.series[i].value;
                        //     }
                        // }

                    },
                    // formatter: "{a} <br/>{b}完成数: {c}<br/>"
                },
                legend: {
                    data: ['2018', '2019', '2020', '2021', '2022'],
                    selected : {
                        '2019' : false,
                        '2020' : false,
                        '2021' : false,
                        '2022' : false
                    },
                    selectedMode : 'single'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['一季度', '二季度', '三季度', '四季度'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],

            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.ColumnChartPanel.superclass.constructor.call(this, {
            title : '季度工作计划完成情况',
            layout: 'fit',
            width:800,
            items: [this.grid]
        })
    }
});