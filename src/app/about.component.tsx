import * as firebase from 'firebase';
import * as React from 'react';
import {Motion, OpaqueConfig, presets, spring} from 'react-motion';

import './about.component.pcss';
import Social from './social';
import AboutMe from './stateless-components/about-me';

const database = firebase.database();
const meRef = database.ref('me/');

interface IAboutState {
    aboutMeMotion: { alpha: number | OpaqueConfig };
}

export class About extends React.Component<{}, IAboutState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            aboutMeMotion: {
                alpha: 0,
            },
        };
    }

    private static currAnime: string;
    private static currBook: string;
    private static currGame: string;
    private static currMusic: string;
    private static currTV: string;

    public componentDidMount() {
        meRef.once('value').then((snapshot) => {
            About.currAnime = snapshot.child('anime').val();
            About.currBook = snapshot.child('book').val();
            About.currGame = snapshot.child('game').val();
            About.currMusic = snapshot.child('music').val();
            About.currTV = snapshot.child('tv').val();

            // For triggering the alpha animation for AboutMe.
            this.setState({aboutMeMotion: {alpha: spring(1, presets.gentle)}});
        });
    }

    // Component of ME!!!.

    public render(): JSX.Element {
        return (
            <div className="about-root">
                <div className="about-content">
                    <Motion
                        style={this.state.aboutMeMotion}
                    >
                        {(interpolation: any) =>
                            <div
                                style={{
                                    opacity: interpolation.alpha,
                                }}
                            >
                                <header><h2 className="about-header">
                                    Amal Karunarathna
                                </h2>
                                    <Social/>
                                </header>
                                <main>
                                    {AboutMe(About.currAnime, About.currBook, About.currGame, About.currMusic, About.currTV)}
                                </main>
                            </div>
                        }
                    </Motion>
                </div>
            </div>
        );
    }
}
