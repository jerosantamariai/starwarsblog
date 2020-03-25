import React from 'react';
import InfoCard from './infocard';

const BlogInfo = props => {
    return (
        <>
            <div className="bloginfo d-flex justify-content-center">
                <div className="card-deck col-11">
                    {
                        !!props.infocard &&
                        props.infocard.map((elem, i) => {
                            return (
                                <InfoCard
                                    image={elem.image}
                                    title={elem.title}
                                    description={elem.description}
                                />
                            )
                        })

                    }
                </div>
            </div>
        </>
    )
}

export default BlogInfo;