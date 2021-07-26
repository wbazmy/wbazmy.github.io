---
layout: post
title: JDK,JRE和JVM
date: 2021-07-26
tags: Java基础
---
JDK：Java Development Kit        //Java开发工具包  
JRE：Java runtime environment     //Java运行环境  
JVM：Java Virtual Machine    //Java虚拟机  

## 1. JDK
JDK是Java开发工具包，是Sun Microsystems针对Java开发员的产品。JDK中包含JRE，在JDK的安装目录下有一个名为jre的目录，里面有两个文件夹bin和lib，在这里可以认为bin里的就是jvm，lib中则是jvm工作所需要的类库，而jvm和lib和起来就称为jre。JDK是整个JAVA的核心，包括了Java运行环境JRE（Java Runtime Envirnment）、一堆Java工具（javac/java/jdb等）和Java基础的类库（即Java API 包括rt.jar）。  
1. SE(J2SE)，standard edition，标准版，是我们通常用的一个版本，从JDK 5.0开始，改名为Java SE。
2. EE(J2EE)，enterprise edition，企业版，使用这种JDK开发J2EE应用程序，从JDK 5.0开始，改名为Java EE。  
3. ME(J2ME)，micro edition，主要用于移动设备、嵌入式设备上的java应用程序，从JDK 5.0开始，改名为Java ME。  

## 2. JRE
是运行基于Java语言编写的程序所不可缺少的运行环境。也是通过它，Java的开发者才得以将自己开发的程序发布到用户手中，让用户使用。  
JRE中包含了Java virtual machine（JVM），runtime class libraries和Java application launcher，这些是运行Java程序的必要组件。  
与大家熟知的JDK不同，JRE是Java运行环境，并不是一个开发环境，所以没有包含任何开发工具（如编译器和调试器），只是针对于使用Java程序的用户。  

## 3. JVM
就是我们常说的java虚拟机，它是整个java实现跨平台的最核心的部分，所有的java程序会首先被编译为.class的类文件，这种类文件可以在虚拟机上执行。  
也就是说class并不直接与机器的操作系统相对应，而是经过虚拟机（相当于中间层）间接与操作系统交互，由虚拟机将程序解释给本地系统执行。  
只有JVM还不能成class的执行，因为在解释class的时候JVM需要调用解释所需要的类库lib，而jre包含lib类库。  
JVM屏蔽了与具体操作系统平台相关的信息，使得Java程序只需生成在Java虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。  
所有的程序只要有java虚拟机的支持，那么就可以实现程序的执行，并且不同的操作系统上会有不同版本的jvm。  
我是这样理解的，jvm相当于一个容器，放到不同的操作系统中，因为编写的Java程序经过编译后生成的字节码可以被JVM识别，JVM为程序运行屏蔽了底层操作系统的差异。  
![](/images/JavaSE/1.png)