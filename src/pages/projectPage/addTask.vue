<template>
    <div class="main-card mb-3 card">
        <div class="card-header-lg card-header" v-sticky sticky-offset="offset" sticky-side="top">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">添加任务</div>
        </div>
        <div class="pt-4 card-body">
            <div class="mx-auto col-md-8">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="任务节点" prop="node">
                        <el-select v-model="ruleForm.node" placeholder="请选择任务节点">
                            <el-option label="test.test.com" value="Master"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属项目" prop="project">
                        <el-select v-model="ruleForm.project" placeholder="请选择项目">
                            <el-option label="Test" value="Test"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="定时任务" prop="delivery">
                        <el-tooltip :content="'定时任务: ' + timeTask" placement="top">
                            <el-switch
                                v-model="timeTask"
                                active-color="#13ce66"
                                inactive-color="#dcdfe6"
                                active-value="开"
                                inactive-value="关">
                            </el-switch>
                        </el-tooltip>
<!--                        <el-switch v-model="ruleForm.delivery"></el-switch>-->
                    </el-form-item>
                    <div id="timeTaskSetting" v-show="timeTask === '开'">
                        <el-form-item label="秒" prop="timeSecond">
                            <el-input v-model="ruleForm.timeSecond"></el-input>
                        </el-form-item>
                        <el-form-item label="分" prop="timeMinute">
                            <el-input v-model="ruleForm.timeMinute"></el-input>
                        </el-form-item>
                        <el-form-item label="时" prop="timeHour">
                            <el-input v-model="ruleForm.timeHour"></el-input>
                        </el-form-item>
                        <el-form-item label="天" prop="timeDay">
                            <el-input v-model="ruleForm.timeDay"></el-input>
                        </el-form-item>
                        <el-form-item label="周" prop="timeWeek">
                            <el-select v-model="ruleForm.dayOfWeek" multiple placeholder="请选择">
                                <el-option
                                    v-for="item in rules.dayOfWeek"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="月" prop="timeMonth">
                            <el-input v-model="ruleForm.timeMonth"></el-input>
                        </el-form-item>
                        <el-form-item label="年" prop="timeYear">
                            <el-input v-model="ruleForm.timeYear"></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item label="动作" prop="action">
                        <el-select v-model="ruleForm.action" placeholder="请选择动作">
                            <el-option label="添加任务 & 运行" value="添加任务 & 运行"></el-option>
                            <el-option label="添加任务" value="添加任务"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="更多设置" prop="moreSettings">
                        <el-switch v-model="ruleForm.moreSettings"></el-switch>
                    </el-form-item>
                    <div id="moreSettings" v-show="ruleForm.moreSettings === true">
                        <el-form-item label="User Agent" prop="userAgent">
                            <el-select v-model="ruleForm.project" placeholder="默认的 User-Agent">
                                <el-option label="Agent1" value="Agent1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="参数">
                            <el-input type="textarea" v-model="ruleForm.arguments"></el-input>
                        </el-form-item>
                    </div>

                </el-form>

            </div>
        </div>
        <div class="d-block text-center card-footer">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
<!--            <button class="mr-2 btn btn-link btn-sm">Cancel</button>-->
<!--            <button class="btn btn-success btn-lg">Save</button>-->
        </div>
    </div>

</template>

<script>

import Sticky from 'vue-sticky-directive'

export default {
    components: {
    },
    directives: {Sticky},
    data: () => ({
        heading: 'Forms Sticky Headers',
        subheading: 'Add sticky headers in forms sections!',
        icon: 'lnr-map text-info',

        offset: {top: 60},
        stickyEnabled: true,
        toggled: false,
        timeTask: '关',

        ruleForm: {
            name: '',
            node: '',
            dayOfWeek: ['*'],
            project: '',
            action: '',
            delivery: false,
            type: [],
            timeSecond: '*',
            timeMinute: '*',
            timeHour: '*',
            timeDay: '*',
            timeWeek: '*',
            timeMonth: '*',
            timeYear: '*',
            moreSettings: false,
            arguments:
                '-a setting=CLOSESPIDER_TIMEOUT=60\n' +
                '-a setting=CLOSESPIDER_PAGECOUNT=10\n' +
                '-a arg1=val1'


        },
        rules: {
            dayOfWeek: [
                {value: '*', label: '*'},
                {value: '1', label: '1'},
                {value: '2', label: '2'},
                {value: '3', label: '3'},
                {value: '4', label: '4'},
                {value: '5', label: '5'},
                {value: '6', label: '6'},
                {value: '7', label: '7'},
            ],
            name: [
                { required: true, message: '请输入任务名称', trigger: 'blur' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            node: [
                { required: true, message: '请选择节点信息', trigger: 'change' }
            ],
            project: [
                { required: true, message: '请选择任务所属项目', trigger: 'change' }
            ],
            action: [
                { required: true, message: '请选择动作', trigger: 'change' }
            ],
            timeDay: [
                { required: false, trigger: 'change' },
                {min: 1, max: 31, message: '只能在1 - 31 中选择', trigger: 'blur'}
            ],
            // date2: [
            //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            // ],
            type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            // resource: [
            //     { required: true, message: '请选择活动资源', trigger: 'change' }
            // ],
            arguments: [
                { required: false, trigger: 'blur' }
            ]
        }
    }),
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}

</script>
