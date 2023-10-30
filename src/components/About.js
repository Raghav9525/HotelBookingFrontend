
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <h1 class="fs-1 text-primary text-center mt-3">About</h1>
            <div class="container mb-2">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <img className="d-block w-100 img-fluid mx-auto" src={require("../img/room-2.jpg")} style={{height: "300px"}} alt="" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                                aperiam unde perferendis cumque labore itaque quis ipsam nemo
                                suscipit perspiciatis praesentium velit ullam optio, temporibus
                                quia doloremque soluta illum vel porro, ipsum, aliquam facilis
                                quos laborum. Amet, odio sed. Sunt explicabo quae eum dolorum
                                veritatis ad debitis sit, corrupti nulla? Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Atque quas vitae harum
                                molestiae error saepe, enim labore accusamus ratione beatae!
                                Ratione dicta magnam aut natus nesciunt laboriosam est? Qui
                                facilis, magni culpa eum perspiciatis sunt quis pariatur unde
                                doloribus aliquam cupiditate quas deserunt odio placeat eos
                                voluptates labore ipsum a quia! Possimus repellat at laboriosam
                                voluptatibus, quos eveniet voluptatem, hic, expedita porro
                                accusamus dolorum. Explicabo ipsam recusandae enim nesciunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About