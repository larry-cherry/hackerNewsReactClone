// basic post block
class JamesTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointsCount = props.pointsCount
        };
    }

    onMouseUp = () => {
        if (props.pointsCount == this.state.pointsCount) {
            this.setState({
                pointsCount: this.state.pointsCount + 1
            });
        } 
    };

    render() {
        return (
            <div style='padding: 0px 0px 10px 0px;'>
                <table>
                    <tr>
                        <td style='vertical-align: top; width: 32px; font-size: 18; color:#777777;'>
                            {props.rowNumber}. <span style='font-size: 13px' onClick={this.onMouseUp}>&#9650;</span>
                        </td>
                        <td style='vertical-align: top; font-size: 18;'>
                            <a href="{props.postLink}" target="_blank">
                                {props.postTitle}
                            </a>
                            <a href="{props.websiteLink}" target="_blank">
                                <span style='color:#777777'>({props.websiteName}})</span>
                            </a>
                            <br>
                            <span style='color:#777777'>{this.state.pointsCount} points by {props.posterUserName} {props.hoursAgo} hours ago | 
                                <a href="{props.hideLink}" target="_blank">hide</a> | <a href="{props.commentLink}" target="_blank">{props.commentsCount} comments</a></span>
                        </td>
                    </tr>
                </table> 
            </div>
        );
    }
}

ReactDOM.render(<JamesTestComponent />, mountNode);

