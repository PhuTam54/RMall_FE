
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            {/* <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok logo" />
                </Link>
            </div> */}
        </header>
    );
}

export default Header;
