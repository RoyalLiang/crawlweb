<template>
    <div>
        <div>
            <div class="main-card mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i class="header-icon lnr-dice mr-3 text-muted opacity-6"> </i>
                        项目列表
                    </div>

                    <div class="btn-actions-pane-right">
                        <button @click="dialogFormVisible = true" class="btn-wide btn-shadow btn btn-primary btn-sm">添加项目</button>
                    </div>

                </div>
                <div class="table-responsive">
                    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                        <tr>
                            <th class="text-center">序号</th>
                            <th class="text-center">名称</th>
                            <th class="text-center">项目节点</th>
                            <th class="text-center">项目描述</th>
                            <th class="text-center">爬虫数</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">创建人</th>
                            <th class="text-center">操作</th>

                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center text-muted">Test</td>
                            <td class="text-center text-muted">节点1</td>
                            <td class="text-center">测试 1 号
                            </td>

                            <td class="text-center">
                                <button type="button" class="btn-icon btn-icon-only btn btn-success">
                                    18
                                </button>
                            </td>
                            <td class="text-center">2020-10-11 08:08
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill pl-2 pr-2 badge-warning">master</div>
                            </td>
                            <td class="text-center">
                                <button type="button" class="btn-icon btn-icon-only btn btn-info">
                                    编辑
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
                <div class="divider mb-0 mt-0"></div>
                <div class="card-body clearfix">
                    <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="float-right mb-0" />
                </div>
            </div>


        </div>
        <el-dialog title="添加项目" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目描述" :label-width="formLabelWidth">
                    <el-input v-model="form.desc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目文件" :label-width="formLabelWidth">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传.zip文件</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>


export default {
    components: {
    },
    data: () => ({
        isShow: false,
        totalRows: 1,
        perPage: 1,
        currentPage: 1,
        dialogFormVisible: false,
        form: {
            name: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        },
        formLabelWidth: '100px',


    }),

    methods: {
    },
};


</script>
