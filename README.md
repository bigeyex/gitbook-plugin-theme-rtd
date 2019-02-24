# gitbook-plugin-theme-rtd
a port of Read the Docs theme to Gitbook.

If you like read-the-docs theme, but do not want to play with Sphinx,  
and you think Gitbook toolchain is better than MKDocs,  
this is your choice.

It is still working in progress.  
And this is a "fork" of base theme instead of an extension. That means,  
some other Gitbook plugins may not work. 

Screenshot:

![Screenshot of this theme](readme-snapshot.png)

## Features

- A neat sidebar, including the SUMMARY and table of contents of the current page.


## Install

```
{
    "plugins": ["theme-rtd"]
}
```

then `gitbook install`.

## Additional Markups

You may create Tip/Warning boxes use these markups:

```
{% note %}
This is a notice
{% endnote %}

{% tip %}
This is a generous tip
{% endtip %}

{% warning %}
This is a Warning
{% endwarning %}

{% warning "Attention" %}
(Change the title if you wish)
{% endwarning %}

{% danger %}
This might be dangerous
{% enddanger %}
```