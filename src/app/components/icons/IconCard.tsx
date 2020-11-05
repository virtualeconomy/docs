import React, { ElementType } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import color from 'color';
// Material-UI Components
import Typography from '@material-ui/core/Typography';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers';

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        height: 137,
        width: 137,
    },
    selected: {
        background: color(theme.palette.primary.main)
            .fade(0.9)
            .string(),
        color: theme.palette.primary.main,
    },
    label: {
        width: '100%',
        textAlign: 'center',
        wordBreak: 'break-word',
        marginTop: '5px',
    },
}));

type IconCardProps = {
    component: ElementType;
    iconSize?: number | 'inherit';
    name?: string;
    showLabel?: boolean;
    style?: CSSProperties;
    selected?: boolean;
    className?: string;
    onClick?: any;
};

export const IconCard: React.FC<IconCardProps> = (props): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { component: Component, name, showLabel, style, className } = props;
    // const selectedIcon = useSelector((state: AppState) => state.app.selectedIcon);
    const selected = useSelector((state: AppState) => state.app.selectedIcon === name);

    //eslint-disable-next-line
    console.log('drawing icon');
    
    return (
        <div
            className={clsx(classes.wrapper, { [classes.selected]: selected }, className)}
            style={style}
            onClick={(): void => {
                // eslint-disable-next-line
                console.log('clicking', name)
                dispatch({type: 'SELECTION', payload: name});
            }}
        >
            {name && Component && <Component style={{ fontSize: 36 }} />}
            {showLabel && (
                <Typography
                    title={name}
                    variant="subtitle2"
                    className={classes.label}
                    color={selected ? 'primary' : 'textPrimary'}
                >
                    {name}
                </Typography>
            )}
        </div>
    );
};

IconCard.defaultProps = {
    showLabel: true,
    selected: false,
    iconSize: 'inherit',
};
