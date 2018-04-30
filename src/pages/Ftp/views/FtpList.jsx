import React from 'react';
import { Card } from 'antd';

import { FORM_CONFIG } from '../config';

class FtpList extends React.Component {

    render () {
        return (
            <div className="ftp-list">
                {
                    this.props.list.map((item, i) => (
                        <Card
                            key={i}
                            title={item.name}
                            style={{ width: 400 }}
                        >
                            {
                                FORM_CONFIG.map(({ pathKey, info }) => (
                                    <p key={pathKey}>
                                        { info }：{ item[pathKey] }
                                    </p>
                                ))
                            }
                        </Card>
                    ))
                }
            </div>
        );
    }
}

export default FtpList;
