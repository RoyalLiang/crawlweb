<template>
    <div>
        <div class="app-inner-layout">

            <div class="main-card mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i class="header-icon lnr-dice mr-3 text-muted opacity-6"> </i>
                        任务列表
                    </div>
                    <div class="btn-actions-pane-right">
                        <button class="btn-wide btn-shadow btn btn-success btn-sm" @click="addTask">添加任务</button>
                    </div>

                </div>
                <div class="table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                        <tr>
                            <th ></th>
                            <th class="text-center">序号</th>
                            <th class="text-center">任务名称</th>
                            <th class="text-center">所属项目</th>
                            <th class="text-center">运行爬虫</th>
                            <th class="text-center">任务状态</th>
                            <th class="text-center">任务日志</th>
                            <th class="text-center">上一次运行时间</th>
                            <th class="text-center">下一次运行时间</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-right">
                                <button @click="seeArgument">></button>
                            </td>
                            <td class="text-center">1</td>
                            <td class="text-center text-muted">
                                <div class="badge badge-pill pl-2 pr-2 badge-warning">测试爬虫</div>
                            </td>
                            <td class="text-center">
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">Test</div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="text-center">workday
                            </td>
                            <td class="text-center">success
                                <!--                                <div class="badge badge-pill pl-2 pr-2 badge-success">12</div>-->
                            </td>
                            <td class="text-center">
                                <a href=""><div class="badge badge-pill pl-2 pr-2 badge-success">18</div></a>
                            </td>

                            <td class="text-center">2020-10-10 08:08:08
                            </td>
                            <td class="text-center">2020-10-10 09:08:08
                            </td>
                            <td class="text-center">
                                <button type="button" class="btn-icon btn-icon-only btn btn-info">
                                    编辑
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" class="btn-icon btn-icon-only btn btn-success">
                                    运行
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" class="btn-icon btn-icon-only btn btn-danger">
                                    停止
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div v-show="moreArgument === true" class="main-card mb-3 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">id:
                                            <div class="ml-auto badge badge-pill">2020_10_10</div>
                                        </li>
                                        <li class="nav-item">创建时间:
                                            <div class="ml-auto badge">2020-10-10 08:08:08</div>
                                        </li>
                                        <li class="nav-item">更新时间:
                                            <div class="ml-auto badge">2020-10-10 08:08:08</div>
                                        </li>
                                        <li class="nav-item">参数:
                                            <div class="badge">{argument: ['-a 111', '-a 222']}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">年:
                                            <div class="ml-auto badge badge-pill">*</div>
                                        </li>
                                        <li class="nav-item">月:
                                            <div class="ml-auto badge">*</div>
                                        </li>
                                        <li class="nav-item">周:
                                            <div class="ml-auto badge">*</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">日:
                                            <div class="ml-auto badge badge-pill">*</div>
                                        </li>
                                        <li class="nav-item">时:
                                            <div class="ml-auto badge">2</div>
                                        </li>
                                        <li class="nav-item">分:
                                            <div class="ml-auto badge">0</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">秒:
                                            <div class="ml-auto badge badge-pill">*</div>
                                        </li>
                                        <li class="nav-item">时区:
                                            <div class="ml-auto badge">UTC</div>
                                        </li>
<!--                                        <li class="nav-item">更新时间-->
<!--                                            <div class="ml-auto badge">2020-10-10 08:08:08</div>-->
<!--                                        </li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="divider mb-0 mt-0"></div>
                    <div class="card-body clearfix">
                        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="float-right mb-0" />
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

import Sparkline from 'vue-sparklines'
import VueCircle from 'vue2-circle-progress'


import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCalendarAlt,
    faAngleDown,
    faStar,
    faAngleUp,
    faTh,
    faBusinessTime,
    faArrowLeft,
    faArrowRight,
    faCog,
    faDotCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faAngleDown,
    faCalendarAlt,
    faStar,
    faAngleUp,
    faTh,
    faBusinessTime,
    faCog,
    faArrowLeft,
    faArrowRight,
    faDotCircle,
);

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Sparkline,
        // eslint-disable-next-line vue/no-unused-components
        VueCircle,

    },
    data: () => ({

        currentPage: 1,
        perPage: 1,
        totalRows: 1,

        fields: [
            {
                key: 'last_name',
                sortable: true
            },
            {
                key: 'first_name',
                sortable: true
            },
            {
                key: 'age',
                label: 'Person age',
                sortable: true,
                // Variant applies to the whole column, including the header and footer
            }
        ],
        items: [
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        ],
        moreArgument: false,

        spIndicatorStyles1: false,
        spData2: (() => {
            const len = 10
            return Array.from({
                length: len
            }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles2: {
            stroke: 'var(--primary)',
            strokeWidth: '2'
        },

        spData1: (() => {
            const len = 10
            return Array.from({
                length: len
            }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles1: {
            stroke: 'var(--danger)',
            strokeWidth: '2'
        },

        spData3: (() => {
            const len = 10
            return Array.from({
                length: len
            }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles3: {
            stroke: 'var(--warning)',
            strokeWidth: '2'
        },

        spData4: (() => {
            const len = 10
            return Array.from({
                length: len
            }, () => Math.floor(Math.random() * len))
        })(),
        spCurveStyles4: {
            stroke: 'var(--info)',
            strokeWidth: '2'
        },
    }),

    methods: {
        handleEdit(index, row) {
            // eslint-disable-next-line no-console
            console.log(index, row);
        },
        handleDelete(index, row) {
            // eslint-disable-next-line no-console
            console.log(index, row);
        },
        seeArgument(){
            this.moreArgument = !this.moreArgument
        },
        addTask(){
            this.$router.push('/project/addTask')
        }
    },

}
</script>