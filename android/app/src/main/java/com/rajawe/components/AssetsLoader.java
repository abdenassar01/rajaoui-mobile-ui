package com.rajawe.components;

import android.content.Context;
import android.graphics.Typeface;
import androidx.appcompat.widget.AppCompatTextView;

import android.util.AttributeSet;

public class AssetsLoader extends AppCompatTextView {

    public AssetsLoader(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public AssetsLoader(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public AssetsLoader(Context context) {
        super(context);
        init();
    }

    public void init() {
        Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/Baloo2.ttf");
        setTypeface(tf ,Typeface.NORMAL);

    }
}