/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import TextField from 'material-ui/TextField';
import FormControl from 'material-ui/Form/FormControl';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        //float: 'right'

    },
    input: {
        fontSize: '21px',
        marginTop: '-4px'
    }
});

function TextMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
    const {inputRef, onChange, ...other} = props;

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

class FormattedInputs extends React.Component {
    state = {
        textmask: '7(   )    -    ',
        numberformat: '1320',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;
        const {textmask, numberformat} = this.state;

        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <Input
                        className={classes.input}
                        value={'8944'}
                        onChange={this.handleChange('textmask')}
                        id="formatted-text-mask-input"

                    />
                </FormControl>
            </div>
        );
    }
}

FormattedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);
