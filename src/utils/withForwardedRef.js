import React, {forwardRef} from 'react';


export default function (Component) {
    const WrappedComponent = forwardRef((props, ref) => (
        <Component {...props} forwardedRef={ref}/>
    ));

    if (Component.propTypes) {
        WrappedComponent.propTypes = Component.propTypes;
    }

    if (Component.defaultProps) {
        WrappedComponent.defaultProps = Component.defaultProps;
    }

    return WrappedComponent;
}
