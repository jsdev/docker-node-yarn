/**
 * Created by antonio on 7/10/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import fields from './fields'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const mockService = [
    {
        control: 'text',
        props: {
            label: 'Name',
            id: 'ryan',
            defaultValue: 'tony'
        }
    }, {
        control: 'text',
        props: {
            label: 'Start Date',
            id: 'start',
            type: 'date',
            defaultValue: '2010-10-31'
        }
    }
    ];

const propsToState = fields =>
    fields.reduce((result, field) => (result[field.props.id] = field.props.defaultValue, result), {});


class MenuAppBar extends React.Component {
    state = propsToState(mockService);
    render() {
        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <h1>Sample Dynamic Form</h1>
                {fields(mockService, this)}
                <div>
                    <h2>Form State</h2>
                    {JSON.stringify(this.state)}
                </div>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
