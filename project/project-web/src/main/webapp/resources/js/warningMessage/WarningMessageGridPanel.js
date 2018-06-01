Ext.ns('Ext.project');
Ext.project.WarningMessageGridPanel = new Ext.extend(Ext.grid.GridPanel, {
	constructor : function(config) {
		if (config == null) {
			config = {};
		}
		Ext.apply(this, config);
		// 每页显示10条
		this.pageSize = 10;
		// 增删改查方法路径
		this.Url = {
            queryUrl : 'project/establish/queryListForPage',
            insertUrl : 'project/establish/insert',
            updateUrl : 'project/establish/update',
            deleteUrl : 'project/establish/delete'
		},
		/** 选择模型界面四方选择框 * */
		this.sm = new Ext.grid.CheckboxSelectionModel({
			/*
			 * //多选模式 Multiselect : true
			 */
			singleSelect : true,
		});
		/** 定义表头* */
		this.columnModel = new Ext.grid.ColumnModel([ this.sm, {
			dataIndex : 'id',
			hidden : true
		}, {
			header : '预警标题',
			dataIndex : 'title',
            renderer : function(value) {
				return '<div style=";color:red;">' + value + '</div>';
            }
		}, {
			header : '预警时间',
			dataIndex : 'sendTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
		}, {
            header : '是否已经查看',
            dataIndex : 'reader'
        }]);
		/** 定义数据源 */
		this.store = new Ext.data.JsonStore({
			url : this.Url.queryUrl,
			method : 'POST',
			root : 'rows',
			totalProperty : 'results',
			baseParams : {
				start : 0,
				limit : this.pageSize
			},
			fields : [ 'id', 'title',{
						name : 'sendTime',
						type : 'date',
						dateFormat : 'time'
					},'reader'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',title: '轨道交通项目滞后',sender:'王五',sendTime: '1522482884000',reader: '已查看'},
                    {id: '2',title: '机电学院项目滞后',sender:'老六',sendTime: '1522339200000',reader: '已查看'},
                    {id: '3',title: '国际高铁项目滞后',sender:'张三',sendTime: '1522482884000',reader: '待查看'},
                    {id: '4',title: '科学研究和社会服务项目滞后',sender:'张三',sendTime: '1522339200000',reader: '待查看'}
                ]
            },
            autoLoad:true

		});

		/** 模糊查询框 */
		this.cycleButton = new Ext.CycleButton({
			width : 80,
			showText : true,
			items : [ {
				text : '标题',
				value : 'projectName'
			}, {
				text : '发送人',
				value : 'projectType'
			} ],
			changeHandler : function(btn, item) {
				this.searchField.field = item.value;
			},
			scope : this
		});
		// 将默认选中项的value给store
		this.store.baseParams.field = this.cycleButton.getActiveItem().value;
		this.searchField = new Ext.ux.form.SearchField({
			store : this.store,
			field : this.field,
			paramName : 'value',
			emptyText : '查询值',
			style : 'margin-left: 5px;'
		});


        /** 项目是否完结条件查询* */
        this.cycleButton1 = new Ext.CycleButton({
            width : 80,
            showText : true,
            items : [{
                text : '选择状态',
                value : null
            },{
                text : '已完结',
                value : '1'
            }, {
                text : '未完结',
                value : '0'
            }],
            changeHandler : function(btn, item) {
                this.store.baseParams.field = item.value;
                this.store.load();
            },
            scope : this
        });

		/** 定义操作按钮 */
		this.toolbar = new Ext.Toolbar([ {
            text : '查看',
            scope : this,
            iconCls : 'add',
            handler : this.showInsertWindow
        }, '-',this.cycleButton,'-',this.searchField ,'-','筛选状态：',this.cycleButton1]);

		/** 底部工具栏 */
		this.bbar = new Ext.PagingToolbar({
			store : this.store,
			pageSize : this.pageSize,
			displayInfo : true
		});

		/** 执行构造函数 */
		Ext.project.WarningMessageGridPanel.superclass.constructor.call(this, {
			/** 选择模型 */
			sm : this.sm,
			/** 表头 */
			cm : this.columnModel,
			/** 数据源 */
			store : this.store,
			/** 操作按钮 */
			tbar : this.toolbar,
			/** 底部工具栏 */
			bbar : this.bbar,

			/** 页面显示平铺 */
			viewConfig : {
				forceFit : true
			},
			/** 添加双击显示 */
			/*
			 * listeners:{ rowdblclick:this.rowdbClickFn, scope:this },
			 */
			loadMask : true,
		});
		//this.store.load();

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addWarningMessageWindow == null) {
			this.addWarningMessageWindow = new Ext.project.WarningMessageWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store
			});
			this.addWarningMessageWindow.setTitle('发送消息');
		}
		this.addWarningMessageWindow.show();
		this.addWarningMessageWindow.reset();
	}



});