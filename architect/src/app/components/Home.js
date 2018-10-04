import React, { PureComponent } from 'react';

class Home extends PureComponent {
    render() {
        const { environment } = this.props;

        console.log('env: ', environment);

        return (
            <section id="home-page">
                <p className="txtIntro">Home</p>
                <div className="cssTest">Test css</div>
            </section>
        );
    }
}

export default Home;
