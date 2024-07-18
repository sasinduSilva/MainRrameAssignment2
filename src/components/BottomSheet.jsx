import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

// Get the screen height for layout calculations
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Define maximum translate Y value for the bottom sheet
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

// Define BottomSheet component with forwardRef for exposing methods
const BottomSheet = React.forwardRef((props, ref) => {
  // Extract children from props
  const { children } = props;
  // Shared values for animated properties
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  //Function to animate the bottom sheet to a specific position
  const scrollTo = useCallback((destination) => {
    'worklet';  // Indicates that this function can be used in worklets
    
    // Update active state based on the destination
    active.value = destination !== 0;

    // Animate translation with spring effect
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  //Function to check if the bottom sheet is active
  const isActive = useCallback(() => {
    return active.value;
  }, []);

  // Expose methods to parent component using ref
  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  // Gesture context to store initial Y position
  const context = useSharedValue({ y: 0 });

  // Define gesture for dragging the bottom sheet
  const gesture = Gesture.Pan()
    .onStart(() => {
      // Store initial Y position when gesture starts
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      // Update translation value based on gesture movement
      translateY.value = event.translationY + context.value.y;
      // Restrict translation value to maximum limit
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      // Snap to position based on final translation value
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

    // Animated style for the bottom sheet
  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  // Animated style for the backdrop
  const rBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active.value ? 1 : 0),
    };
  }, []);

  // Animated props for the backdrop
  const rBackdropProps = useAnimatedProps(() => {
    return {
      pointerEvents: active.value ? 'auto' : 'none', // Enable/disable pointer events based on active state
    };
  }, []);

  return (
    <>
      <Animated.View
        onTouchStart={() => {
          // Dismiss the BottomSheet
          scrollTo(0);
        }}
        animatedProps={rBackdropProps}
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          rBackdropStyle,
        ]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.bottomSheetContainer, rBottomSheetStyle]}
        >
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
});
// Styles for the bottom sheet and handle
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
