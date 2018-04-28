
import React from 'react';

import { Table } from 'antd';

class PublishTable extends React.Component {
    constructor () {
        super(...arguments);

        this.state = {
            tableData: new Array(20).fill({
                name: 'test项目',
                desc: 'test项目descdescdescdescdescdescdesc',
            })
        }
    }

    render () {
        return (
            <div>
                2222
            </div>
        )
    }
}

export default PublishTable;
