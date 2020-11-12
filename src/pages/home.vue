<template>
    <div>
        <div class="app-inner-layout">
            <div class="mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                        总览
                    </div>

                </div>
                <div class="no-gutters row">
                    <div class="col-sm-6 col-md-4 col-xl-4">
                        <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div class="icon-wrapper rounded-circle">
                                <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
                                <i class="lnr-laptop-phone text-dark opacity-8"></i></div>
                            <div class="widget-chart-content">
                                <div class="widget-subheading">项目</div>
                                <div class="widget-numbers">3</div>
<!--                                <div class="widget-description opacity-8 text-focus">-->
<!--                                    <div class="d-inline text-danger pr-1">-->
<!--                                        <font-awesome-icon icon="angle-down"/>-->
<!--                                        <span class="pl-1">Pong</span>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="divider m-0 d-md-none d-sm-block"></div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl-4">
                        <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div class="icon-wrapper rounded-circle">
                                <div class="icon-wrapper-bg opacity-9 bg-danger"></div>
                                <i class="lnr-graduation-hat text-white"></i></div>
                            <div class="widget-chart-content">
                                <div class="widget-subheading">爬虫</div>
                                <div class="widget-numbers"><span>15</span></div>
<!--                                <div class="widget-description opacity-8 text-focus">-->
<!--                                <span class="text-info pl-1">-->
<!--                                    <font-awesome-icon icon="angle-down"/>-->
<!--                                    <span class="pl-1">!!!</span>-->
<!--                                </span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="divider m-0 d-md-none d-sm-block"></div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-xl-4">
                        <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div class="icon-wrapper rounded-circle">
                                <div class="icon-wrapper-bg opacity-9 bg-success"></div>
                                <i class="lnr-apartment text-white"></i></div>
                            <div class="widget-chart-content">
                                <div class="widget-subheading">任务</div>
                                <div class="widget-numbers text-success"><span>30</span></div>
<!--                                <div class="widget-description text-focus">-->
<!--                                <span class="text-warning pl-1">-->
<!--                                    <font-awesome-icon icon="angle-up"/>-->
<!--                                    <span class="pl-1">玩命开发中</span>-->
<!--                                </span>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="main-card mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i class="header-icon lnr-dice mr-3 text-muted opacity-6"> </i>
                        节点列表
                    </div>
                    <div class="btn-actions-pane-right">
                        <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                                <button v-on="on" class="btn-wide btn-shadow btn btn-primary btn-sm">添加节点</button>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">添加节点</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
<!--                                        <v-flex xs12 sm6 md4>-->
<!--                                            <v-text-field label="server address*" required></v-text-field>-->
<!--                                        </v-flex>-->
<!--                                        <v-flex xs12 sm6 md4>-->
<!--                                            <v-text-field label="node name*" required hint="example of helper text only on focus"></v-text-field>-->
<!--                                        </v-flex>-->
<!--                                        <v-flex xs12 sm6 md4>-->
<!--                                            <v-text-field-->
<!--                                                label="Legal last name*"-->
<!--                                                hint="example of persistent helper text"-->
<!--                                                persistent-hint-->
<!--                                                required-->
<!--                                            ></v-text-field>-->
<!--                                        </v-flex>-->
                                        <v-flex xs12>
                                            <v-text-field label="Node Address*" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Node Name*" required></v-text-field>
                                        </v-flex>
<!--                                        <v-flex xs12 sm6>-->
<!--                                            <v-select-->
<!--                                                :items="['0-17', '18-29', '30-54', '54+']"-->
<!--                                                label="Age*"-->
<!--                                                required-->
<!--                                            ></v-select>-->
<!--                                        </v-flex>-->
<!--                                        <v-flex xs12 sm6>-->
<!--                                            <v-autocomplete-->
<!--                                                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"-->
<!--                                                label="Interests"-->
<!--                                                multiple-->
<!--                                            ></v-autocomplete>-->
<!--                                        </v-flex>-->
                                    </v-layout>
                                </v-container>
<!--                                <small>*indicates required field</small>-->
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="dialog = false">取消</v-btn>
                                <v-btn color="blue darken-1" flat @click="dialog = false">保存</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                        <tr>
                            <th class="text-center">序号</th>
                            <th class="text-center">节点名称</th>
                            <th class="text-center">节点地址</th>
                            <th class="text-center">节点任务</th>
                            <th class="text-center">节点爬虫</th>
                            <th class="text-center">节点状态</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">操作</th>

                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center text-muted">
                                <div class="badge badge-pill pl-2 pr-2 badge-warning">master</div>
                            </td>
                            <td class="text-center">
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">127.0.0.1:8080</div>
<!--                                            <div class="widget-subheading opacity-7">上海</div>-->
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="text-center">2
<!--                                <div class="badge badge-pill pl-2 pr-2 badge-warning">12</div>-->
                            </td>
                            <td class="text-center">15
<!--                                <div class="badge badge-pill pl-2 pr-2 badge-success">12</div>-->
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill pl-2 pr-2 badge-danger">down</div>
                            </td>

                            <td class="text-center">2020-10-10
<!--                                <div class="badge badge-pill pl-2 pr-2 badge-info"></div>-->
                            </td>
                            <td class="text-center">
                                <button type="button" class="btn-icon btn-icon-only btn btn-info">
                                    详情
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" class="btn-icon btn-icon-only btn btn-danger">
                                    删除
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">2</td>
                            <td class="text-center text-muted">
                                <div class="badge badge-pill pl-2 pr-2 badge-success">slave</div>
                            </td>
                            <td class="text-center">
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">service.test.com</div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="text-center">2
                                <!--                                <div class="badge badge-pill pl-2 pr-2 badge-warning">12</div>-->
                            </td>
                            <td class="text-center">15
                                <!--                                <div class="badge badge-pill pl-2 pr-2 badge-success">12</div>-->
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill pl-2 pr-2 badge-info">work</div>
                            </td>

                            <td class="text-center">2020-10-10
<!--                                <div class="badge badge-pill pl-2 pr-2 badge-info"></div>-->
                            </td>
                            <td class="text-center">
                                <button type="button" class="btn-icon btn-icon-only btn btn-info">
                                    详情
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" class="btn-icon btn-icon-only btn btn-danger">
                                    删除
                                </button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                监控面板
                            </div>
                        </div>
                        <div class="widget-chart p-0">
                            <MixedExample></MixedExample>
                        </div>
                        <div class="pt-2 card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-numbers fsize-3 text-muted">63%</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="text-muted opacity-6">Generated Leads</div>
                                                </div>
                                            </div>
                                            <div class="widget-progress-wrapper mt-1">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style="width: 63%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-numbers fsize-3 text-muted">32%</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="text-muted opacity-6">Submitted Tickers</div>
                                                </div>
                                            </div>
                                            <div class="widget-progress-wrapper mt-1">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width: 32%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-numbers fsize-3 text-muted">71%</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="text-muted opacity-6">Server Allocation</div>
                                                </div>
                                            </div>
                                            <div class="widget-progress-wrapper mt-1">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style="width: 71%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-numbers fsize-3 text-muted">41%</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="text-muted opacity-6">Generated Leads</div>
                                                </div>
                                            </div>
                                            <div class="widget-progress-wrapper mt-1">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100" style="width: 41%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import MixedExample from '../chart/MixedExample'

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
            MixedExample,
        },
        data: () => ({

            currentPage: 1,
            perPage: 5,
            totalRows: 45,
            modalShow: false,
            dialogVisible: false,
            dialog: false,
            desc: '',

            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',

            fill: {gradient: ["var(--primary)"]},
            fill1: {gradient: ["#2af598", "#009efd"]},
            fill2: {gradient: ["#fccb90", "#d57eeb"]},

            f1: {gradient: ["#3f6ad8"]},
            f2: {gradient: ["#3ac47d"]},
            f3: {gradient: ["#16aaff"]},
            f4: {gradient: ["#f7b924"]},
            f5: {gradient: ["#d92550"]},
            f6: {gradient: ["#444054"]},

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

    }
</script>