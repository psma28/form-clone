# Extra rules

{% hint style="warning" %}
The following rules could change if all the involved developers agree to. If so, please be sure to change this section content.
{% endhint %}

> Every React component will be wrapped and exported as a function

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
This rule will not apply to functions located inside hooks, constants will be used instead

<img src="../.gitbook/assets/image (9).png" alt="" data-size="original">
{% endhint %}

> Try to name every component and function in English.

> If a component has any sort of state management asociated to it, then separate this logic into a separate hook.

{% hint style="info" %}
The name of every hook should start with "use....". For example: useEvents, useComponents, etc.
{% endhint %}

> When posible, wrap every icon inside a new JSX component
>
> ![](<../.gitbook/assets/image (10).png>)

> The first letter of any fuction should be in lower case,  except if it is a component or the first word is a proper name.
>
> ![](<../.gitbook/assets/image (13).png>)&#x20;
>
> ![](<../.gitbook/assets/image (11).png>)
