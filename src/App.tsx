import React, { Component } from 'react';

import { Logger } from './common/logger';
import './App.css';

const logger = new Logger();

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="text-center flex flex-col justify-center h-screen">
                <p className="text-gray-700 text-lg">
                    "Like a sandcastle, all is temporary. Build it, tend it, enjoy it. And when the time comes, let it go."
                </p>
                <p className="text-sm text-gray-500 mt-1">- Jack Kornfield</p>
            </div>
        );
    }
}

export default App;
