import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class EmployeeList extends Component {
    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>社員番号</td>
                            <td>名前</td>
                            <td>性別</td>
                            <td>勤続年数</td>
                            <td>職種</td>
                            <td>役職</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>A山A太郎</td>
                            <td>男性</td>
                            <td>5年</td>
                            <td>開発部</td>
                            <td>部長</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A山A太郎</td>
                            <td>男性</td>
                            <td>5年</td>
                            <td>開発部</td>
                            <td>部長</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<EmployeeList />, document.getElementById('example'));
}
