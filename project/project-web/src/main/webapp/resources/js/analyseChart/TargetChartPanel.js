Ext.ns('Ext.project');
Ext.project.TargetChartPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    dataMap : {
        dataAcademy : null,
        dataSchool : null,
        dataProvince : null,
        dataCountry : null,
        isAchieve:null,
    },
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
            this.dataMap.dataAcademy = this.dataFormatter({
                //max : 60000,
                2022:[811,446,114,487,494,930,312],
                2021:[696,390,100,423,390,804,312],
                2020:[603,311,847,357,304,667,312],
                2019:[500,257,692,285,238,600,312],
                2018:[431,215,601,232,194,545,234]
            });

        // this.dataMap.dataSchool = this.dataFormatter({
        //     //max : 4000,
        //     2022:[88.8,103.35,1461.81,276.77,634.94,939.43,672.76],
        //     2021:[88.68,112.38,1400,262.42,589.56,882.41,625.61],
        //     2020:[87.36,105.28,1370.43,276.3,522.8,798.43,568.69],
        //     2019:[84.11,89.91,1064.05,215.19,420.1,615.8,488.23],
        //     2018:[82.44,84.21,956.84,197.8,374.69,590.2,446.17]
        // });

        this.dataMap.dataProvince = this.dataFormatter({
            2022:[219,245,611,275,237,456,191],
            2021:[202,213,527,235,177,386,158],
            2020:[185,168,430,191,124,306,132],
            2019:[148,133,341,146,967,289,109],
            2018:[124,106,291,113,754,260,943]
        });

        // this.dataMap.dataCountry = this.dataFormatter({
        //     //max : 25000,
        //     2022:[5837.55,1902.31,3895.36,1846.18,1934.35,3798.26,1687.07],
        //     2021:[4854.33,1658.19,3340.54,1611.07,1542.26,3295.45,1413.83],
        //     2020:[4092.27,1319.76,2805.47,1375.67,1270,2811.95,1223.64],
        //     2019:[3435.95,1150.81,2439.68,1176.65,1000.79,2487.85,1075.48],
        //     2018:[2982.57,997.47,2149.75,992.69,811.47,2258.17,958.88]
        // });

        this.option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    data: [
                        '2018-01-01','2019-01-01','2020-01-01','2021-01-01', '2022-01-01'
                    ],
                    label: {
                        formatter : function(s) {
                            return (new Date(s)).getFullYear();
                        }
                    }
                },
                title: {
                    subtext: '用于显示各年度的指标'
                },
                tooltip: {
                },
                legend: {
                    x: 'center',
                    // data: ['指标数', '预期数','完成数']
                    data: ['指标数','完成数']
                },
                calculable : true,
                toolbox: {
                    feature: {
                        // dataView: {show: true, readOnly: false},
                        // saveAsImage: {show: true}
                    }
                },
                grid: {
                    top: 80,
                    bottom: 100,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                },
                xAxis: [
                    {
                        type:'category',
                        // axisLabel:{interval:0},
                        axisLabel :{
                            interval:0,
                            rotate:-20,

                        },
                        data:['毕业生创业人数','公益性培训服务次数','学生创新成果数','教师人均企业实践次数','高水平人才建设','教学成果数','人才引进数']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    /* {name: '院级', type: 'bar'},
                     {name: '校级', type: 'bar'},*/
                    {name: '指标数', type: 'bar'},
                    // {name: '预期数', type: 'bar'},
                    {name: '完成数', type: 'bar'},
                    {
                        type: 'pie',
                        center: ['85%', '20%'],
                        radius: '20%',
                        z: 100
                    },
                    // {name:'是否达标',type:"bar"},
                ]
            },
            options: [
                {
                    title: {text: '2018高水平专业建设项目量化指标完成情况'},
                    series: [
                        {data: this.dataMap.dataProvince['2018']},
                        // {data: this.dataMap.dataCountry['2018']},
                        {data:this.dataMap.dataAcademy['2018']},
                        {data: [
                            {name: '指标数', value: this.dataMap.dataProvince['2018sum']},
                            // {name: '预期数', value: this.dataMap.dataCountry['2018sum']},
                            {name: '完成数', value: this.dataMap.dataAcademy['2018sum']},

                        ]},
                        // {data:"不达标"},

                    ]
                },
                {
                    title : {text: '2019高水平专业建设项目量化指标完成情况'},
                    series : [
                        {data: this.dataMap.dataProvince['2019']},
                        // {data: this.dataMap.dataCountry['2019']},
                        {data: this.dataMap.dataAcademy['2019']},
                        {data: [
                            {name: '指标数', value: this.dataMap.dataProvince['2019sum']},
                            // {name: '预期数', value: this.dataMap.dataCountry['2019sum']},
                            {name: '完成数', value: this.dataMap.dataAcademy['2019sum']},

                        ]},
                        // {data:"不达标"},
                    ]
                },
                {
                    title : {text: '2020高水平专业建设项目量化指标完成情况'},
                    series : [
                        {data: this.dataMap.dataProvince['2020']},
                        // {data: this.dataMap.dataCountry['2020']},
                        {data: this.dataMap.dataAcademy['2020']},
                        {data: [
                            {name: '指标数', value: this.dataMap.dataProvince['2020sum']},
                            // {name: '预期数', value: this.dataMap.dataCountry['2020sum']},
                            {name: '完成数', value: this.dataMap.dataAcademy['2020sum']},

                        ]},
                        // {data:"达标"},
                    ]
                },
                {
                    title : {text: '2021高水平专业建设项目量化指标完成情况'},
                    series : [
                        {data: this.dataMap.dataProvince['2021']},
                        // {data: this.dataMap.dataCountry['2021']},
                        {data: this.dataMap.dataAcademy['2021']},
                        {data: [
                            {name: '指标数', value: this.dataMap.dataProvince['2021sum']},
                            // {name: '预期数', value: this.dataMap.dataCountry['2021sum']},
                            {name: '完成数', value: this.dataMap.dataAcademy['2021sum']},

                        ]},
                        // {data:"不达标"},

                    ]
                },
                {
                    title : {text: '2022高水平专业建设项目量化指标完成情况'},
                    series : [
                        {data: this.dataMap.dataProvince['2022']},
                        // {data: this.dataMap.dataCountry['2022']},
                        {data: this.dataMap.dataAcademy['2022']},
                        {data: [
                            {name: '指标数', value: this.dataMap.dataProvince['2022sum']},
                            // {name: '预期数', value: this.dataMap.dataCountry['2022sum']},
                            {name: '完成数', value: this.dataMap.dataAcademy['2022sum']},
                        ]},
                        // {data:"达标"},
                    ]
                }
            ]
        };


        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option,

        });

        Ext.project.TargetChartPanel.superclass.constructor.call(this, {
            // title : '量化指标完成情况',
            layout: 'fit',
            width : 600,
            items: [this.grid],
    })
    },
    dataFormatter : function (obj) {
        var pList = ['毕业生创业人数','公益性培训服务次数','学生创新成果数','教师人均企业实践次数','高水平人才建设','教学成果数','人才引进数'];
        var temp;
        for (var year = 2018; year <= 2022; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name : pList[i],
                    value : temp[i],

                }
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    },

    // isAchiveve:function (value1,value2,value3) {
    //
    //     return "达标"
    //
    //     // Ext.Msg.alert(value1.length+"");
    //     // console.log(value1[1].value);
    //     // if(value1<value3){
    //     //     return "达标";
    //     // }else {
    //     //     return "未达标";
    //     // }
    // }



});