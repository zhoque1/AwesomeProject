import {StyleService} from '@ui-kitten/components/theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import appStyles, {isDarkMode} from '../styles';

export default StyleService.create({
    ...appStyles,
    layoutContainer: {
        marginLeft: 25, marginRight: 20, marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        alignItem: 'flex-start',
    },
    contentContainer: {flex: 1},
    header: {flexDirection: 'row', alignItems: 'center', marginHorizontal: 5},
    sectionHeader: {
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: '500',
    },
    subSectionHeader: {
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: '500',
    },
    carousel: {
        backgroundColor: '#141518',
        aspectRatio: 1.5,
        flexGrow: 0,
    },
    photoItem: {
        elevation: 3,
        height: '100%',
    },
    photoBackground: {
        flex: 1,
    },
    disclaimer: {
        fontSize: 13,
        color: 'color-basic-600',
        padding: 16,
    },
    section: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        alignSelf: 'flex-start',
        width: '95%',
    },
    map: {
        height: 120,
        width: '100%',
        marginTop: 5,
    },
    sectionContent: {marginTop: 16, marginBottom: 20},
    highlights: {
        fontSize: 14,
        textAlign: 'left',
        color: 'color-basic-600',
        padding: 10,
    },
    sectionText: {
        fontSize: 13,
        color: 'color-basic-600',
        lineHeight: 18,
    },
    dataPoint: {
        flexDirection: 'row',
    },
    dataPointLabel: {
        flex: 1,
        padding: 8,
    },
    dataPointValue: {
        flex: 1,
        padding: 8,
        fontWeight: '700',
    },
    dot: {
        color: 'color-primary-500',
        fontSize: 4,
        padding: 4,
    },
    placardText:{
        fontSize: 14, textAlign: 'left', color: 'color-basic-600', paddingTop: 5,
    }
});
export {isDarkMode};
