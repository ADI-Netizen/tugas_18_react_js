import React, { Component } from 'react';
import { Col, Row, Slide, Slider, Caption, Card, CardTitle, Icon, Pagination } from 'react-materialize';
import Side from './Side';

class Utama extends Component {
    render() {
        return (
            <div>
                <Side />
                <Slider>
                    <Slide image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="Slider1" />}>
                        <Caption>
                            <h3>
                                Pantai
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Dapatkan kesempatan jalan - jalan ke pantai dengan membeli sebuah product.
                            </h5>
                        </Caption>
                    </Slide>

                    <Slide image={<img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Slider2" />}>
                        <Caption placement="left">
                            <h3>
                                Wisata Pencakar Langit
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Dapatkan diskon untuk pembelian tiket wisata pencakar langit
                            </h5>
                        </Caption>
                    </Slide>

                    <Slide image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" alt="Slider3" />}>
                        <Caption placement="right">
                            <h3>
                                Jalan Jalan ke kota Paris
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Hai kamu yang manis
                            </h5>
                        </Caption>
                    </Slide>
                </Slider>
                Hot list
                <Row className="center-align">
                    <Col s={3}>
                        <Card className="small"
                            header={
                                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>
                            }>
                            Audio Technica mulai dari <mark style={{ backgroundColor: "red" }}>Rp. 910 Rb</mark>
                        </Card>
                    </Col>
                    <Col s={3}>
                        <Card className="small"
                            header={
                                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone </CardTitle>
                            }>
                            Handphone Samsung - Mulai Dari <mark style={{ backgroundColor: "red" }}>Rp. 200 Rb</mark>
                        </Card>
                    </Col>
                    <Col s={3}>
                        <Card className="small"
                            header={
                                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Squishy</CardTitle>
                            }>
                            Squishy - Mulai Dari <mark style={{ backgroundColor: "red" }}>Rp. 5,5 Rb</mark>
                        </Card>
                    </Col>
                    <Col s={3}>
                        <Card className="small"
                            header={
                                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avenger</CardTitle>
                            }>
                            Koleksi The Avenger - Mulai Dari <mark style={{ backgroundColor: "red" }}>Rp. 10 Rb</mark>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination
                            activePage={2}
                            item={10}
                            leftBtn={<Icon>chevron_left</Icon>}
                            maxButtons={8}
                            rightBtn={<Icon>chevron_right</Icon>}
                        />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Utama;