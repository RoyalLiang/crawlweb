<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <div class="h-100">
                <b-row class="h-100 no-gutters">
                    <b-col lg="4" class="d-none d-lg-block">
                        <div class="slider-light">
                            <slick ref="slick" :options="slickOptions6">
                                <div
                                    class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                    <div class="slide-img-bg"/>
                                    <div class="slider-content text-light">
                                        <h3>失败</h3>
                                        <p>
                                            失败，并不可怕，可怕的是害怕失败。
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                    <div class="slide-img-bg"/>
                                    <div class="slider-content text-light">
                                        <h3>这是一个初生牛犊的计划</h3>
                                        <p>
                                            不见兔子不撒鹰
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                    <div class="slide-img-bg opacity-6"/>
                                    <div class="slider-content text-light">
                                        <h3>别急，刚开始</h3>
                                        <p>
                                            还差一个PRD。
                                        </p>
                                    </div>
                                </div>
                            </slick>
                        </div>
                    </b-col>
                    <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
                        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
                            <div class="app-logo"/>
                            <h4 class="mb-0">
                                <div>Welcome back,</div>
                                <span>Please sign in to your account.</span>
                            </h4>
                            <h6 class="mt-3">
                                No account?
                                <a href="javascript:void(0);" class="text-primary">Sign up now</a>
                            </h6>
                            <div class="divider"/>
                            <div>
                                <Form>
                                    <b-row form>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="exampleEmail">Email</Label>
                                                <b-form-input type="email" name="email" id="exampleEmail"
                                                              placeholder="Email here..."/>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="examplePassword">Password</Label>
                                                <b-form-input type="password" name="password" id="examplePassword"
                                                              placeholder="Password here..."/>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    <b-form-checkbox name="check" id="exampleCheck">
                                        Keep me logged in
                                    </b-form-checkbox>
                                    <div class="divider"/>
                                    <div class="d-flex align-items-center">
                                        <div class="ml-auto">
                                            <a href="javascript:void(0);" class="btn-lg btn btn-link">Recover
                                                Password</a>
                                            <b-button variant="primary" size="lg">Login to Dashboard</b-button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </b-col>
                    </b-col>
                </b-row>
            </div>
        </transition>
    </div>
</template>

<script>

    import Slick from 'vue-slick';

    export default {
        components: {
            Slick
        },
        data: () => ({

            slickOptions6: {
                dots: true,
                infinite: true,
                speed: 500,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                initialSlide: 0,
                autoplay: true,
                adaptiveHeight: true
            },

            slide: 0,
            sliding: null
        }),

        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            },
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>
